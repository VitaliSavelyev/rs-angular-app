export interface SearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      typeVideo: {
        url: string,
        width: number,
        height: number
      }
    }
  }
}
