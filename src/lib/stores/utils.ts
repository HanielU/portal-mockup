import { writable } from "svelte/store";

export const navState = writable<{ open: boolean; width: number }>({
	open: false,
	width: 0,
});
