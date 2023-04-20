import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
	id: number;
	slug: string;
	name: string;
}

export interface Game {
	id: number;
	name: string;
	slug: string;
	released: string;
	tba: boolean;
	background_image: string;
	rating: number;
	rating_top: number;
	ratings: [];
	ratings_count: number;
	reviews_text_count: number;
	added: number;
	added_by_status: {};
	metacritic: number;
	playtime: number;
	suggestions_count: number;
	updated: string;
	user_game: null;
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	platforms: [];
	parent_platforms: { platform: Platform }[];
	genres: [];
	stores: [];
	clip: null;
	tags: [];
	esrb_rating: {};
	short_screenshots: [];
}

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.search,
			},
		},
		[gameQuery]
	);

export default useGames;
