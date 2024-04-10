<script>
	import { page } from '$app/stores';

	export let menuItems = [];
</script>

<div class="bg-white border-t border-gray-200 py-10">
	<div class="container px-4 mx-auto">
		<div class="grid md:grid-cols-3 gap-4">
			<div class="flex flex-col gap-4 items-start">
				<img src="/img/logo.png" alt="" />
				&copy; 2024 Sallas Zwolle
			</div>
			<div class="flex flex-col gap-1">
				{#each menuItems as item}
					<a href={item.url} class="no-underline text-black">{item.label}</a>
				{/each}
			</div>
			<div class="flex flex-col gap-1">
				<h4>Contact opnemen?</h4>
				<p class="mb-2">
					Bij vragen kunt u vrijblijvend contact opnemen met ons via de volgende gegevens.
				</p>
				<div class="flex flex-col gap-1">
					<div>E-mail: info@sallas.nl</div>
					<div>Telefoon: 0600000000</div>
				</div>
			</div>
		</div>
	</div>
</div>
