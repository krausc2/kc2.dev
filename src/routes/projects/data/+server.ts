import { json } from "@sveltejs/kit";
import { projects } from "./projects";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
	return json(projects);
};
