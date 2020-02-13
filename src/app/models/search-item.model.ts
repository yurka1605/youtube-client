export interface SearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: SearchItemSnippet;
    statistics: SearchItemSnippetStatistics;
}

export interface SearchItemSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: SearchItemSnippetThumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: SearchItemSnippetLocalized;
    defaultAudioLanguage: string;
}

export interface SearchItemSnippetThumbnails {
    default: SearchItemSnippetThumbnail;
    medium: SearchItemSnippetThumbnail;
    high: SearchItemSnippetThumbnail;
    standard: SearchItemSnippetThumbnail;
    maxres: SearchItemSnippetThumbnail;
}

export interface SearchItemSnippetThumbnail {
    url: string;
    width: number;
    height: number;
}

export interface SearchItemSnippetLocalized {
    title: string;
    description: string;
}

export interface SearchItemSnippetStatistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}