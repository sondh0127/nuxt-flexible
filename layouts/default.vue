<template>
	<!-- <div class="dashboard"> -->
	<div class="video-container">
		<div class="overlay overlay-bottom">
			<div id="iframe" class="pointer-events-auto">
				<div class="w-full h-full">
					<div class="flex flex-col w-full h-full">
						<Nuxt />
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- </div> -->
</template>

<style lang="scss">
body,
html {
	width: 100%;
	height: 100%;
	margin: 0;
}

* {
	box-sizing: border-box;
}

.echarts {
	width: 100% !important;
	height: 100% !important;
}

#__nuxt {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	width: 100%;
	height: 100%;
}
#__layout {
	width: 100%;
	height: 100%;
}

.dashboard {
	background: rgb(12, 27, 95, 0.75);
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 1920px;
	height: 1080px;

	& > div > div {
		position: absolute;
		border: solid 1px rgba(255, 255, 255, 0.2);
	}
}

.video-container {
	display: block;
	box-sizing: border-box;
	background-color: rgb(0, 0, 0, 0.5);
	position: relative;
	padding: 0;
	width: 1920px;
	height: 1080px;
	margin: auto;
}

.overlay {
	background: rgb(12, 27, 95, 0.6);
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	pointer-events: none;
	display: flex;
}

.overlay-top-left {
	justify-content: flex-start;
	align-items: flex-start;
}

.overlay-top {
	justify-content: center;
	align-items: flex-start;
}

.overlay-top-right {
	justify-content: flex-end;
	align-items: flex-start;
}

.overlay-right {
	justify-content: flex-end;
	align-items: center;
}

.overlay-bottom-right {
	justify-content: flex-end;
	align-items: flex-end;
}

.overlay-bottom {
	justify-content: center;
	align-items: flex-end;
}

.overlay-bottom-left {
	justify-content: flex-start;
	align-items: flex-end;
}

.overlay-left {
	justify-content: flex-start;
	align-items: center;
}

.overlay-center {
	justify-content: center;
	align-items: center;
}
</style>
