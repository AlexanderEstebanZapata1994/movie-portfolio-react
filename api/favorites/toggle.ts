import { createClient } from '@supabase/supabase-js'
import type { VercelRequest, VercelResponse } from '@vercel/node';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

const tableName = "favorite_movies"

export default async function handler(req: VercelRequest, res: VercelResponse) {

    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const { movie_id } = req.body as { movie_id?: number | string };
    if (!movie_id) {
        return res.status(400).end('Missing movie ID');
    }

    try {
        const { data, error } = await supabase.from(tableName).select().eq('movie_id', movie_id);

        if (error) throw error;

        if (data && data.length > 0) {
            const { error: deleteError } = await supabase.from(tableName).delete().eq('movie_id', movie_id);
            if (deleteError) throw deleteError;

            return res.status(200).json({ is_favorite: false });
        } else {
            const { error: insertError } = await supabase.from(tableName).insert({ movie_id, is_favorite: true });
            if (insertError) throw insertError;

            return res.status(200).json({ is_favorite: true });
        }
    } catch (error) {
        console.error('Error toggling favorite:', error);
        return res.status(500).end('Internal Server Error');
    }

}