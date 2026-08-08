import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ fetch }) => {
	return {
		streamed: {
			projects: fetch("/projects/data").then((res) => res.json())
		}
	};
};
