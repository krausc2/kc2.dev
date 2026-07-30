import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export function formatDate(dateString: string | undefined): string {
	if (!dateString || dateString === "UNDEFINED") return "UNDEFINED";

	const date = new Date(dateString);
	if (isNaN(date.getTime())) return "UNKNOWN";

	const month = date.toLocaleDateString("en-US", { month: "long" });
	const day = date.getDate();
	const year = date.getFullYear();

	let suffix = "th";
	if (day % 10 === 1 && day !== 11) suffix = "st";
	else if (day % 10 === 2 && day !== 12) suffix = "nd";
	else if (day % 10 === 3 && day !== 13) suffix = "rd";

	return `${month} ${day}${suffix}, ${year}`;
}
