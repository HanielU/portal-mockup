<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const load: Load = ({ url }) => {
		if (url.pathname === "/") {
			return {
				redirect: "/dashboard",
				status: 301,
			};
		}
		return {};
	};
</script>

<script>
	import "../app.scss";
	import { NavSideBar } from "$lib/components/exports";
	import { navState } from "$lib/stores/utils";
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500&family=Mulish:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>

	<meta name="theme-color" content="#fdfdfd" />
</svelte:head>

<div class="wrapper">
	<NavSideBar />

	<main style:--nav-width="{$navState.width}px" class:open={$navState.open}>
		<slot />
	</main>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		height: 100%;
		width: 100%;
		display: flex;
	}

	main {
		background: var(--background-color);
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
		transition: 400ms ease;

		&.open {
			background: #f5f6fa;
			transform: translate(var(--nav-width)) scaleY(0.9);
			border-radius: 21px;
			overflow: hidden;

			@include min-width(727px) {
				border-radius: 0px;
				transform: translate(var(--nav-width));
			}
		}
	}
</style>
