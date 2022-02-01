<script lang="ts">
	import {
		DailyTimeTable,
		ModuleStats,
		PageHeader,
		StudentDetails,
		StudentPerformanceGraph,
	} from "$lib/components/exports";

	let pageTitle = "My Dashboard";
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<div class="wrapper">
	<PageHeader {pageTitle} />

	<section class="content-grid">
		<!-- first section -->
		<div class="content-grid__item">
			<ModuleStats />

			<DailyTimeTable />
		</div>

		<!-- second section -->
		<div class="content-grid__item">
			<div class="cgpa">
				<h3 class="title">Cumulative Grade Point Average</h3>
				<h1>3.78</h1>
			</div>

			<StudentPerformanceGraph />

			<StudentDetails />
		</div>
	</section>
</div>

<style lang="scss">
	.wrapper {
		height: 100vh;
		max-height: 100%;
		width: 100%;
		padding-bottom: 100px;
		overflow-y: auto;
		position: relative;
	}

	.content-grid {
		padding: 0 20px;
	}

	.cgpa {
		@include bg-w-shadow;
		text-align: center;

		.title {
			font-size: 16px;
			font-weight: 500;
			color: #474c61;
		}

		h1 {
			line-height: 1;
			font-size: 56px;
			color: #474c61;
		}
	}
</style>
