<script>
	import { Slider } from '$ui';
	import { Badge } from '$ui/icons';

	export let data = {};
</script>

<Slider title="Sallas Verkoopwagens & Foodtrucks" />
<div class="flex flex-col gap-[50px] my-[20px] sm:my-[50px] relative top-[-100px]">
	<div class="container mx-auto px-4">
		<div class="text-center lg:w-[60%] mx-auto mb-[100px] p-10 md:p-20 bg-white">
			<h2 class="mb-4">Verkoopwagen of Foodtruck?</h2>
			<p class="mb-4 text-black/60">Voor de actuele prijzen, kijk onder <a href="/aanbiedingen">aanbiedingen</a>.</p>
			<p>
				Naast het produceren van alle soorten gangbare verkoopwagens leveren we ook speciaalbouw; Een verkoopwagen, foodtruck of bak op uw bedrijfswagen volgens uw specificaties!
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<Badge size="50" />
					<h3>Verkoopwagens</h3>
				</div>
				<p>
					Lorem sed aliquam numquam obcaecati illum nobis unde. Ab distinctio distinctio consequuntur voluptatum expedita Nemo quam maiores dolorem ut enim reiciendis. Sapiente commodi facere rerum possimus adipisci Distinctio iste assumenda.
				</p>
			</div>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<Badge size="50" />
					<h3>Foodtrucks</h3>
				</div>
				<p>
					Lorem sed aliquam numquam obcaecati illum nobis unde. Ab distinctio distinctio consequuntur voluptatum expedita Nemo quam maiores dolorem ut enim reiciendis. Sapiente commodi facere rerum possimus adipisci Distinctio iste assumenda.
				</p>
			</div>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<Badge size="50" />
					<h3>Vragen?</h3>
				</div>
				<p>
					Lorem sed aliquam numquam obcaecati illum nobis unde. Ab distinctio distinctio consequuntur voluptatum expedita Nemo quam maiores dolorem ut enim reiciendis. Sapiente commodi facere rerum possimus adipisci Distinctio iste assumenda.
				</p>
			</div>
		</div>
	</div>
</div>
