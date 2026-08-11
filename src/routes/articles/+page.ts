import type { PageLoad } from "./$types";

export const load: PageLoad = ({ fetch }) => {
	return {
		streamed: {
			articles: fetch("/articles/data").then((res) => res.json())
		}
	};
};
