<script lang="ts">
	import stats from "$lib/dummydata/quickstats";
	import {
		IconCurrent,
		IconFailed,
		IconPassed,
		IconRegistered,
	} from "$lib/components/exports";
	const icons = [IconRegistered, IconPassed, IconFailed, IconCurrent];
</script>

<section>
	{#each stats as stat, i}
		<div class="stat">
			<div class="stat__details">
				<p>{stat.title}</p>
				<h2>{stat.number}</h2>
			</div>

			<!--icon component  -->
			<svelte:component this={icons[i]} />
		</div>
	{/each}
</section>

<style lang="scss">
	section {
		width: 100%;
		padding-bottom: 20px;
	}

	.stat {
		@include bg-w-shadow;
		margin-bottom: 20px;
		padding: 20px 30px;
		// box-shadow: 0px 0px 1.3px rgba(#bcbec4, 0.016),
		// 	0px 0px 3.3px rgba(#bcbec4, 0.022), 0px 0px 6.7px rgba(#bcbec4, 0.028),
		// 	0px 0px 13.9px rgba(#bcbec4, 0.034), 0px 0px 38px rgba(#bcbec4, 0.05);
		border-radius: 21px;
		@include flex($justify: space-between);

		&__details {
			p {
				color: var(--gray-400);
				font-weight: 600;
			}

			h2 {
				font-size: 24px;
			}
		}

		// &__icon {
		// 	padding: 20px;
		// 	border-radius: 1000px;
		// 	background: var(--gray-100);
		// }
	}

	@include min-width(727px) {
		section {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 20px;
		}

		.stat {
			margin-bottom: 0;
			padding: 30px;

			&__details {
				// p {
				// }
				h2 {
					font-size: 28px;
				}
			}
		}
	}
</style>
