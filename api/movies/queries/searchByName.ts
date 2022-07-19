import { client } from '@/utils/client';

const searchByName = async (query: string) => {
    const res = await client.get(
        // eslint-disable-next-line max-len
        `/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
    );

    if (res?.data) {
        return res.data;
    }

    return null;
};

export { searchByName };
