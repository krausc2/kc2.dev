import type { PageLoad } from "./$types";

export const load: PageLoad = ({ fetch }) => {
	return {
		streamed: {
			projects: fetch("/projects/data").then((res) => res.json())
		}
	};
};
