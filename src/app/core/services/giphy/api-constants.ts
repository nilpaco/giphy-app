export const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const SEARCH_URL = `${BASE_URL}/search`;
export const TRENDING_URL = `${BASE_URL}/trending`;
export const GIF_URL = (giphyId: string) => `${BASE_URL}/${giphyId}`;
