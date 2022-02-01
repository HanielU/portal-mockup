export type CourseSchedule = {
	moduleCode: string;
	moduleName: string;
	day: { name: Day; start: string; end: string; venue: string }[];
	lecturer: { name: string; id: string }[];
	moduleKind: string;
	status: string;
};

export type Day =
	| "Sunday"
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday";
