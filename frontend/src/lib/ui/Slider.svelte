<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let title = 'Sallas Verkoopwagens';
	export let images = [
		{
			src: 'https://picsum.photos/id/134/1200/800',
		},
		{
			src: 'https://picsum.photos/id/101/1200/800',
		},
		{
			src: 'https://picsum.photos/id/102/1200/800',
		},
	];

	let curr = 0;

	onMount(() => {
		setInterval(() => {
			if (curr + 1 > images.length-1) {
				curr = 0;
			} else {
				curr ++;
			}
		}, 5000);
	});
</script>

<div class="mx-auto relative h-[400px] sm:h-[500px] md:h-[650px]">
	<div class="h-full container px-4 mx-auto relative z-10 flex items-center">
		<h1 class="py-[20px] px-[40px] bg-primary text-white">{title}</h1>
	</div>
	{#key curr}
		<img
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 200, delay: 200 }}
			class="w-full h-full object-cover absolute top-0 left-0"
			src={images[curr].src}
			alt={images[curr].alt || 'image'}
		/>
	{/key}
</div>
