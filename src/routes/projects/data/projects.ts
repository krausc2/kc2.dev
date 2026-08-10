export interface Project {
	slug: string;
	title: string;
	tags: string[];
	description: string;
}

export const projects: Project[] = [
	{
		slug: "test-project",
		title: "Test Project",
		tags: ["Svelte", "TypeScript", "Test2"],
		description: "This is a test project to verify the layout."
	}
];
