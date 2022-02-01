import type { CourseSchedule, Day } from "$lib/types";

export const days: Day[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const dayIndex = (day: Day) => {
	switch (day) {
		case "Monday":
			return 1;
		case "Tuesday":
			return 2;
		case "Wednesday":
			return 3;
		case "Thursday":
			return 4;
		case "Friday":
			return 5;
		default:
			return undefined;
	}
};

const schedule: CourseSchedule[] = [
	{
		moduleCode: "LAW519",
		moduleName: "ICT Law",
		day: [
			{
				name: days[dayIndex("Monday")],
				start: "11:00",
				end: "13:00",
				venue: "Block C IT Lounge",
			},
			{
				name: days[dayIndex("Thursday")],
				start: "16:00",
				end: "18:00",
				venue: "Room C22",
			},
		],
		lecturer: [{ name: "Dayo Godwin Ashonibary", id: "E0668" }],
		moduleKind: "Lecture",
		status: "Fresh",
	},
	{
		moduleCode: "COM415",
		moduleName: "Human Computer Interface",
		day: [
			{
				name: days[dayIndex("Monday")],
				start: "16:00",
				end: "18:00",
				venue: "Network Lab (Block D)",
			},
		],
		lecturer: [{ name: "Ruqayya Muhammad", id: "E1438" }],
		moduleKind: "Lecture",
		status: "Fresh",
	},
	{
		moduleCode: "COM421",
		moduleName: "Org. Of Programming languages",
		day: [
			{
				name: days[dayIndex("Tuesday")],
				start: "09:00",
				end: "12:00",
				venue: "Room B15",
			},
		],
		lecturer: [{ name: "Uppin Chandrashekar", id: "E0299" }],
		moduleKind: "Lecture",
		status: "Fresh",
	},
	{
		moduleCode: "COM404",
		moduleName: "Distributed Programming",
		day: [
			{
				name: days[dayIndex("Wednesday")],
				start: "14:00",
				end: "17:00",
				venue: "D72",
			},
		],
		lecturer: [{ name: "Isah Saidu Charles", id: "E0764" }],
		moduleKind: "Lecture",
		status: "Fresh",
	},
	{
		moduleCode: "COM412",
		moduleName: "Computer And Network Security",
		day: [
			{
				name: days[dayIndex("Wednesday")],
				start: "09:00",
				end: "12:00",
				venue: "D46",
			},
		],
		lecturer: [{ name: "Samuel Chukwuyenum Ubaru", id: "E0059" }],
		moduleKind: "Lecture",
		status: "Fresh",
	},
	{
		moduleCode: "COM401",
		moduleName: "Project Management & Ethics",
		day: [
			{
				name: days[dayIndex("Friday")],
				start: "12:00",
				end: "13:00",
				venue: "D72",
			},
		],
		lecturer: [
			{ name: "Khadijah Saad Mohammed", id: "E1029" },
			{ name: "Kayode Olasunkanmi Alawonde", id: "E1708" },
		],
		moduleKind: "Lecture",
		status: "Fresh",
	},
];

export const getModulesFor = (day: Day) => {
	const requestedDay = days[dayIndex(day)];
	const requestedCourseSchedules = schedule.filter((item) => {
		const hasDay = item.day.some((day) => day.name === requestedDay);

		// todo: implement system to sort courses based on the start times for the courses
		// const sortedSchedule = item.day.sort((a, b) => Number(a.start.slice(0, 2)) - Number(b.start.slice(0, 2)))
		return hasDay;
	});
	return requestedCourseSchedules;
};
