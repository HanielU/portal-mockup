<script lang="ts">
	import { Chart, registerables } from "chart.js";
	import randomColor from "randomcolor";
	import { hexToRGBA, ogBD, ogBG } from "$lib/utils/helpers";

	const opacity = (hexColors: string[], opacity = 1) =>
		hexColors.map((color) => hexToRGBA(color, opacity));

	const gpaScores = [2.57, 2.61, 3.32, 3.1, 1.86, 1.8];
	const labels = ["19C", "20A", "20C", "21A", "21B", "21C"];

	// this creates an array of nice light red colors that are consistent
	const themeColors = randomColor({
		count: labels.length,
		hue: "red",
		luminosity: "light",
	});

	// maybe implement random color generator for the bar chart lines background
	const data = {
		labels,
		datasets: [
			{
				label: "GPA",
				data: gpaScores,
				backgroundColor: opacity(themeColors, 0.4),
				// backgroundColor: ogBG,
				// borderColor: ogBD,
				borderColor: themeColors,
				borderWidth: 1,
			},
		],
	};

	const createChart = (ctx: HTMLCanvasElement) => {
		Chart.register(...registerables); // when canvas is mounted
		new Chart(ctx, {
			type: "bar",
			data,
			options: {
				maintainAspectRatio: false, // alows chart to use the width and height of parent container
				scales: {
					y: {
						beginAtZero: true,
						max: 4,
					},
				},
			},
		});
	};
</script>

<div class="container">
	<div class="title">
		<h2>Student Performance Graph</h2>
		<p>(Max Performance 4)</p>
	</div>

	<div class="chart">
		<canvas use:createChart />
	</div>
</div>

<style lang="scss">
	.container {
		@include bg-w-shadow;
		padding: 0;
		text-align: center;

		.title {
			width: 100%;
			padding: 20px;
			text-align: center;
			border-bottom: 1px solid var(--border-color);

			h2 {
				font-size: var(--fs-mid);
				font-weight: 500;
			}
			p {
				font-size: var(--fs-smallest);
				font-weight: 300;
			}
		}
	}

	.chart {
		padding: 20px;
		height: 400px;

		@include min-width(727px) {
			padding: 20px 60px;
		}
	}
</style>
