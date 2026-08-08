export interface Project {
	slug: string;
	title: string;
	tag: string;
	description: string;
}

export const projects: Project[] = [
	{
		slug: "test-project",
		title: "Test Project",
		tag: "svelte",
		description: "This is a test project to verify the layout."
	}
];
