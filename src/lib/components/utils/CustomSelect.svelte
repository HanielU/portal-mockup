<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import { slide } from "svelte/transition";
	import AngleDownIcon from "../icons/AngleDownIcon.svelte";
	export let items: string[];
	export let activeItem: string = items[0];

	onMount(() => {
		document.body.addEventListener("click", (e) => {
			if (!open) return;

			const target = <HTMLElement>e.target;
			if (target.classList.contains("item-select__trigger")) return;

			if (target.parentElement.className !== "item-select") {
				open = false;
			}
		});
	});

	let open = false;
	let optionsHeight = 0;
	let options: HTMLDivElement;

	$: options &&
		options.childNodes.forEach((node) => {
			let nodeH = <HTMLDivElement>node;
			optionsHeight += nodeH.clientHeight;
		});

	const dispatch = createEventDispatcher();
	const toggleOpen = () => (open = !open);

	// takes item: current item item as an argument for dispatching
	function handleSelectChange(item: string) {
		activeItem = item;
		dispatch("select", activeItem);
	}
</script>

<!-- select wrapper -->
<div class="item-select-wrapper" on:click={toggleOpen}>
	<!-- main select -->
	<div class="item-select" class:open>
		<!-- The trigger that is clicked and whose value is replaced -->
		<div class="item-select__trigger">
			<span>{activeItem}</span>

			<div class="arrow">
				<AngleDownIcon />
			</div>
		</div>

		<!-- Options for the select -->
		<div
			class="item-options"
			bind:this={options}
			style:--thisHeight="{optionsHeight}px"
			class:open
		>
			{#each items as item}
				<div
					class="item-option"
					class:active={item === activeItem}
					on:click={() => handleSelectChange(item)}
				>
					{item}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.item-select-wrapper {
		position: relative;
		user-select: none;
		width: 100%;
	}

	.item-select__trigger,
	.item-option {
		font-size: 16px;
		font-weight: normal;
		cursor: pointer;
		padding: 15px;
		height: fit-content;
		// z-index: 2;

		@extend %no-highlight;
	}

	.item-select {
		position: relative;

		&__trigger {
			@include flex($justify: space-between);
			background: #f7f7f8;
			font-weight: var(--semibold);
			border-radius: 12px;
			border: 1px solid transparent;
			transition: border 300ms;

			span {
				pointer-events: none;
			}
		}

		&.open &__trigger {
			border: 1px solid rgba(#35363b, 0.4);
		}
	}

	.item-options {
		position: absolute;
		width: 100%;
		display: block;
		background: #fff;
		top: 130%;
		left: 0;
		overflow: hidden;
		box-shadow: 0px 4px 21px rgba(#bcbec4, 0.2);
		// border: 1px solid rgba(83, 89, 104, 1);
		border-radius: 12px;
		// opacity: 0;
		pointer-events: none;
		height: 0;
		transition: all 300ms;

		&.open {
			height: var(--thisHeight);
			// opacity: 1;
			pointer-events: all;
		}
	}

	.item-option {
		&:hover {
			background: var(--gray-100);
		}
	}

	.item-option.active {
		// removes active option from sight
		display: none;
	}

	.arrow {
		pointer-events: none;
		margin-left: 10px;
		display: flex; // for some reason it centers the arrow image

		:global(svg) {
			transition: 300ms;
			fill: var(--text-color-primary);
			font-size: 21px;
		}
	}

	.open .arrow :global(svg) {
		transform: rotate(180deg);
	}
</style>
