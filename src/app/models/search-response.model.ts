import { SearchItem } from './search-item.model';

export interface SearchResponse {
    kind: string;
    etag?: string;
    pageInfo?: SearchResponsePageInfo;
    items?: SearchItem[];
}

export interface SearchResponsePageInfo {
    totalResults: number;
    resultsPerPage: number;
}