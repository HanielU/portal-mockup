<script lang="ts">
	import { days, getModulesFor } from "$lib/dummydata/courseSchedule";
	import type { CourseSchedule, Day } from "$lib/types";
	import { Select } from "../exports";

	let selectedDay = days[new Date().getDay()]; // get current day
	$: coursesForTheDay = getModulesFor(selectedDay);
	// $: console.log({coursesForTheDay});

	const handleDayChange = ({ detail: newSelectedDay }: CustomEvent<Day>) =>
		(selectedDay = newSelectedDay);
</script>

<section>
	<div class="section-header">
		<h3>Timetable</h3>

		<div class="select-container">
			<Select
				activeItem={selectedDay}
				items={days}
				on:select={handleDayChange}
			/>
		</div>
	</div>

	<div class="scheduled-courses">
		{#each coursesForTheDay as { moduleCode, moduleName, day }}
			{@const mainDay = day.find((item) => item.name === selectedDay)}

			<div class="scheduled-courses__item">
				<div class="title">
					{moduleName} ({moduleCode})
				</div>

				<div class="time">
					{mainDay.start} - {mainDay.end}
				</div>

				<div class="venue">
					{mainDay.venue}
				</div>
			</div>
		{:else}
			<div class="scheduled-courses__item">No Course Today</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		// box-shadow: 0px 0px 16px rgba(#35363b, 0.1);
		// background: white;
		margin: 10px 0;
		padding: 10px 0 50px;
		border-radius: 16px;
		// margin: auto;

		@include min-width(727px) {
			padding: 20px;
			@include bg-w-shadow;
		}
	}

	.section-header {
		padding: 20px;
		// @include flex($justify: space-between);

		h3 {
			margin-bottom: 15px;
			font-size: 21px;
			text-align: center;
			font-weight: 700;

			@include min-width(727px) {
				text-align: left;
			}
		}

		@include min-width(727px) {
			padding: 0 0 20px 0;
		}
	}

	.select-container {
		// margin-bottom: 20px;
		min-width: 130px;
		width: 60%;
		margin: auto;

		@include min-width(727px) {
			margin: 0;
			max-width: 200px;
		}
	}

	.scheduled-courses {
		width: 100%;

		&__item {
			padding: 20px;
			// font-family: var(--font-secondary);
			border: 1px solid rgba(#bcbec4, 0.4);
			border-radius: 16px;
			margin-bottom: 10px;
			// border-bottom: 1px solid rgba(#35363b, 0.2);

			.title {
				font-weight: 700;
				font-size: 1rem;
				margin-bottom: 5px;
			}

			.time {
				font-size: 14px;
			}

			.venue {
				font-weight: 500;
				font-size: 14px;
			}
		}
	}

	@include min-width(727px) {
	}
</style>
