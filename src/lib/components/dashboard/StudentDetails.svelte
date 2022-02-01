<script lang="ts">
	import studDetails from "$lib/dummydata/studdetails";
</script>

<section class="stud bg">
	<!-- destructured studData -->
	{#each studDetails as { title, value }}
		<div class="stud-detail">
			<h4 class="stud-detail__title">{title}</h4>
			<h2 class="stud-detail__value">{value}</h2>
		</div>
	{/each}
</section>

<style lang="scss">
	.stud {
		@include bg-w-shadow;

		&-detail {
			border-bottom: 1px solid rgba(83, 89, 104, 0.2);

			&:not(:last-child) {
				margin-bottom: 20px;
			}
			&__title {
				font-size: var(--font-size-smallest);
				font-weight: 500;
			}
			&__value {
				font-size: var(--font-size-small);
				font-weight: 700;
			}
		}
	}
</style>
