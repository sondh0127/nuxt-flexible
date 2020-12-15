<template>
	<div
		class="relative flex flex-col items-center justify-center flex-1 transform translate-y-0 bg-gray-300 bg-opacity-50 rounded-xl portrait:translate-y-7/12 portrait:bg-gray-500 portrait:bg-opacity-75"
	>
		<svg
			v-if="isLoading"
			class="w-6 h-6 text-blue-400 animate-spin"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				class="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
		<transition
			v-else
			enter-active-class="transition-all duration-300 ease-in-out"
			leave-active-class="transition-all duration-300 ease-in-out"
			enter-class="transform -translate-y-full"
			enter-to-class="transform translate-y-0"
			leave-class="transform translate-y-0 opacity-100"
			leave-to-class="transform -translate-y-full opacity-0"
		>
			<question-answers v-if="!isShowResult" @chossingEvent="onChossingEvent" />
			<results v-else />
		</transition>
		<button
			class="absolute inline-flex items-center px-1 py-1 text-sm text-red-400 transition duration-150 ease-in-out bg-gray-100 rounded-full top-1 right-1 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed hover:bg-red-500 focus:border-red-700 active:bg-red-700 hover:text-white"
			@click="closeOverlay"
		>
			<svg
				class="w-4 h-4"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
import questionAnswers from './question-answers.vue'
import results from './results.vue'
export default {
	components: {
		questionAnswers,
		results,
	},
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
			isShowResult: false,
			isLoading: false,
		}
	},
}
</script>

<style lang="scss" scoped></style>
