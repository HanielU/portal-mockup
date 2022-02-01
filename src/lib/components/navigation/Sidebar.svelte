<script lang="ts">
	import { page } from "$app/stores";
	import { navState } from "$lib/stores/utils";

	const links = [
		["/dashboard", "Dashboard"],
		["/assessment", "Assessment"],
		["/registration", "Registration"],
		["/account", "Account"],
	];
</script>

<aside class:open={$navState.open} bind:clientWidth={$navState.width}>
	<nav>
		<div class="nav-header">
			<h3>Baze University</h3>
		</div>

		<ul class="navlinks">
			{#each links as [link, name]}
				<li on:click={() => ($navState.open = !$navState.open)}>
					<a
						class:active={$page.url.pathname === link}
						href={link}
						sveltekit:prefetch
					>
						{name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style lang="scss">
	aside {
		height: 100%;
		width: 247px;
		position: fixed;
		z-index: 2;
		left: 0;
		top: 0;
		background: white;
		transform: translate(-100%);
		transition: 400ms ease;

		// @include outline;

		&.open {
			transform: translate(0);
		}
	}

	nav {
		height: 100%;
		width: 100%;
	}

	.nav-header {
		padding: 50px;
		margin-bottom: 30px;
		border-bottom: 1px solid var(--border-color);
	}

	.navlinks {
		list-style: none;
		padding: 10px 20px;

		li a {
			padding: 15px 20px;
			margin-bottom: 10px;
			border-radius: 16px;

			&.active {
				background: rgba(#1d5194, 0.05);
			}
		}
	}
</style>
