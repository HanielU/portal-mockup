<script lang="ts">
	import { navState } from "$lib/stores/utils";

	export let pageTitle: string;
	let headerHeight = 0;
	const toggleNav = () => ($navState.open = !$navState.open);

	let studentName = "Haniel Efe-Tobore Ubogu";
</script>

<header bind:clientHeight={headerHeight}>
	<div class="wrapper">
		<div class="btn-wrapper" on:click={toggleNav}>
			<div class="menu-btn" class:open={$navState.open} />
		</div>

		<h3 class="pagename">{pageTitle}</h3>

		<h3>{studentName}</h3>
		<!--  -->
	</div>
</header>

<div
	class="placeholder"
	style:--headerHeight="{headerHeight}px"
	style:width="100%"
	style=""
/>

<h3 class="small-screen-pagename">{pageTitle}</h3>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		z-index: 9999;
		background: var(--background-color);
		width: 100%;
		border-bottom: 1px solid var(--border-color);

		.wrapper {
			max-width: 1000px;
			margin: auto;
			padding: 20px;
			@include flex($justify: space-between);

			h3 {
				font-size: 16px;
				font-weight: normal;
			}
		}
	}

	.placeholder {
		width: 100%;
		height: var(--headerHeight);
	}

	.small-screen-pagename {
		display: block;
		text-align: center;
		padding: 30px 20px;
		font-size: 22px;
	}

	.btn-wrapper {
		@include flex;
		padding: 15px;
		cursor: pointer;
		@extend %no-highlight;
	}

	.menu-btn {
		position: relative;
		height: 2px;
		width: 25px;
		background: transparent;

		&::before,
		&::after {
			content: "";
			position: absolute;
			top: 0px;
			left: 0px;
			height: inherit;
			width: inherit;
			background: var(--text-color);
			border-radius: 2px;
			transition: transform 400ms ease;
		}
		&::before {
			transform: translateY(-3px);
		}
		&::after {
			transform: translateY(3px);
		}

		&.open {
			&::before {
				transform: rotate(-45deg);
			}

			&::after {
				transform: rotate(45deg);
			}
		}
	}

	.pagename {
		display: none;
	}

	@include min-width(727px) {
		header {
			border: none;
			box-shadow: 0px 0px 16px rgba(#dcdee4, 0.7);

			.wrapper .pagename {
				display: block;
				margin: 0 15px 0 auto;
				padding-right: 15px;
				border-right: 1px solid var(--border-color);
				font-weight: 500;
			}
		}

		.placeholder {
			margin-bottom: 20px;
		}
		.small-screen-pagename {
			display: none;
		}
	}
</style>
