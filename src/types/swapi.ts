export interface SwapiResponse {
  readonly message: string;
  readonly next?: string | null;
  readonly previous?: string | null;
  readonly result?: readonly SwapiResponseDetailedItem[];
  readonly results?: readonly SwapiResponseItem[];
  readonly total_pages?: number;
  readonly total_records?: number;
}

export interface SwapiNormalizedResponse {
  readonly message: string;
  readonly next?: string | null;
  readonly previous?: string | null;
  readonly results: readonly SwapiResponseItem[];
  readonly total_pages?: number;
  readonly total_records?: number;
}

export interface SwapiResponseDetailedItem {
  readonly properties: {
    readonly name: string;
    readonly url: string;
  };
  readonly uid: string;
}

export interface SwapiResponseItem {
  readonly name: string;
  readonly uid: string;
  readonly url: string;
}
