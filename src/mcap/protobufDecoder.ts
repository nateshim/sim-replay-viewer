import protobuf from 'protobufjs';
import descriptor from 'protobufjs/ext/descriptor';

// Cache for parsed protobuf types
const typeCache = new Map<string, protobuf.Type>();
const rootCache = new Map<string, protobuf.Root>();

/**
 * Parse a protobuf schema definition and return the root
 * Supports both .proto text format and binary FileDescriptorSet format
 */
function parseSchema(schemaData: Uint8Array, schemaName: string): protobuf.Root {
  const cacheKey = schemaName;

  if (rootCache.has(cacheKey)) {
    return rootCache.get(cacheKey)!;
  }

  const parseStartTime = performance.now();

  // Try to detect format - .proto text starts with "syntax" or comments
  const schemaText = new TextDecoder().decode(schemaData.slice(0, 100));
  const isTextFormat = schemaText.startsWith('syntax') ||
                       schemaText.startsWith('//') ||
                       schemaText.startsWith('package') ||
                       schemaText.trimStart().startsWith('message ');

  console.log(`[parseSchema] Parsing schema ${schemaName}, isTextFormat: ${isTextFormat}, size: ${schemaData.length} bytes`);

  try {
    let root: protobuf.Root;

    if (isTextFormat) {
      // Parse as .proto text
      const fullText = new TextDecoder().decode(schemaData);
      root = protobuf.parse(fullText, { keepCase: true }).root;
    } else {
      // Parse as binary FileDescriptorSet
      // First decode the FileDescriptorSet message
      const decodedDescriptor = descriptor.FileDescriptorSet.decode(schemaData);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      root = (protobuf.Root as any).fromDescriptor(decodedDescriptor);
    }

    console.log(`[parseSchema] Schema ${schemaName} parsed in ${(performance.now() - parseStartTime).toFixed(0)}ms`);

    rootCache.set(cacheKey, root);
    return root;
  } catch (err) {
    console.error(`Failed to parse schema ${schemaName}:`, err);
    throw err;
  }
}

/**
 * Get a protobuf type from a schema
 */
function getType(schemaData: Uint8Array, schemaName: string): protobuf.Type {
  if (typeCache.has(schemaName)) {
    return typeCache.get(schemaName)!;
  }

  const root = parseSchema(schemaData, schemaName);

  // The schema name is like "foxglove.SceneUpdate" - we need to find it in the root
  const typeName = schemaName.replace('foxglove.', '');

  // Try to find the type - it might be at root level or under foxglove namespace
  let type: protobuf.Type | null = null;

  try {
    type = root.lookupType(schemaName);
  } catch {
    try {
      type = root.lookupType(typeName);
    } catch {
      // Continue to error handling below
    }
  }

  if (!type) {
    // List all types for debugging
    const allTypes: string[] = [];
    function collectTypes(ns: protobuf.NamespaceBase, prefix = '') {
      for (const nested of ns.nestedArray) {
        const fullName = prefix ? `${prefix}.${nested.name}` : nested.name;
        if (nested instanceof protobuf.Type) {
          allTypes.push(fullName);
        }
        if (nested instanceof protobuf.Namespace) {
          collectTypes(nested, fullName);
        }
      }
    }
    collectTypes(root);
    console.log('Available types in schema:', allTypes);
    throw new Error(`Type ${schemaName} not found in schema`);
  }

  typeCache.set(schemaName, type);
  return type;
}

/**
 * Decode a protobuf message
 */
export function decodeProtobuf(
  data: Uint8Array,
  schemaData: Uint8Array,
  schemaName: string
): unknown {
  try {
    const type = getType(schemaData, schemaName);
    const message = type.decode(data);
    return type.toObject(message, {
      longs: Number,
      enums: String,
      bytes: Uint8Array,
      defaults: true,
    });
  } catch (err) {
    console.error(`Failed to decode ${schemaName}:`, err);
    return null;
  }
}

/**
 * Clear the caches (useful when loading a new file)
 */
export function clearProtobufCache(): void {
  typeCache.clear();
  rootCache.clear();
}
