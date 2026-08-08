import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ fetch }) => {
	return {
		streamed: {
			articles: fetch("/articles/data").then((res) => res.json())
		}
	};
};
