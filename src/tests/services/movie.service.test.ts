import { describe, test, expect, vi } from "vitest";
import moviesMockup from "@/tests/services/mocking-data/movies-mockup.data.json";
import { movieService } from "@/services/movie.service";

describe("movieService", () => {
    test("getPopularMovies returns movies", async () => {
        vi.spyOn(globalThis, 'fetch').mockResolvedValue({
            ok: true,
            json: async () => ({
                results: moviesMockup
            })
        } as Response)
        const movies = await movieService.getPopularMovies();
        expect(movies).toBeDefined();
        expect(movies.length).toBeGreaterThan(0);
        expect(movies[0].title).toBe("Cocktail 2");
    });

    test.skip("getPopularMovies failed when fetch throw an error", async () => {
        vi.spyOn(globalThis, 'fetch').mockRejectedValue({
            ok: false,
            json: async () => ({
                status_message: "Failed to fetch popular movies"
            })
        } as Response);
        const error = await movieService.getPopularMovies();
        expect(error).toBeDefined();
        expect(error).toBe("Error fetching popular movies: Failed to fetch movies");
    })
});