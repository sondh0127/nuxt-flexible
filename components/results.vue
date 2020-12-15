<template>
	<div class="grid w-full grid-cols-3 px-4 gap-y-4 gap-x-4">
		<div
			class="col-span-1 px-1 text-sm font-semibold text-center text-gray-200 uppercase truncate bg-blue-500 rounded-lg"
		>
			{{ data.answers[0].label }}:
		</div>
		<div class="col-span-2 bg-gray-300 rounded-lg">
			<div
				class="text-center bg-green-600 rounded-lg "
				:style="{ width: data.answers[0].percent + '%' }"
			>
				<div
					class="inline-block px-2 text-sm text-white bg-green-400 rounded-lg"
				>
					{{ data.answers[0].percent }}%
				</div>
			</div>
		</div>
		<div
			class="col-span-1 px-1 text-sm font-semibold text-center text-gray-200 uppercase bg-blue-500 rounded-lg"
		>
			{{ data.answers[1].label }}:
		</div>
		<div class="col-span-2 bg-gray-300 rounded-lg">
			<div
				class="text-center bg-red-600 rounded-lg"
				:style="{ width: data.answers[1].percent + '%' }"
			>
				<div class="inline-block px-2 text-sm text-white bg-red-400 rounded-lg">
					{{ data.answers[1].percent }}%
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: {
				question: 'Bạn có thích nội dung này không ?',
				answers: [
					{ id: 'yes', label: 'Sample yes answer', percent: 50 },
					{ id: 'no', label: 'Sample no answer', percent: 50 },
				],
			},
			duration: 0,
			overlayId: '{{#OVERLAY_ID}}',
			isInteracted: false,
		}
	},
}
</script>

<style lang="scss" scoped></style>
