import { createClient } from '@supabase/supabase-js'
import { VercelRequest, VercelResponse } from '@vercel/node';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

const tableName = "favorite_movies"

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end('Method Not Allowed');
    }
    try {
        const { data: movies } = await supabase.from(tableName).select()
        const favoriteIds = movies?.map(m => m.movie_id)

        if (!favoriteIds) return res.status(200).json({ movies: [] });

        return res.status(200).json({ favoriteIds });
    } catch (error) {
        console.error('Error listing favorites:', error);
        return res.status(500).end('Internal Server Error');
    }
}