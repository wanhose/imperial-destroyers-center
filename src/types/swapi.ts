export interface SwapiResponse {
  readonly message: string;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: readonly SwapiResponseItem[];
  readonly total_pages: number;
  readonly total_records: number;
}

export interface SwapiResponseItem {
  readonly name: string;
  readonly uid: string;
  readonly url: string;
}
