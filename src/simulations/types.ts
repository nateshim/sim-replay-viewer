export interface S3Object {
  key: string;
  lastModified: Date;
  size: number;
  etag: string;
}

export interface S3ListResult {
  name: string;
  prefix: string;
  contents: S3Object[];
  isTruncated: boolean;
  continuationToken?: string;
}
