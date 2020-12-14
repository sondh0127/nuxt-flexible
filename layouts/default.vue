<template>
	<div class="dashboard">
		<Nuxt />
	</div>
</template>

<style lang="scss">
body,
html {
	width: 100%;
	height: 100%;
	margin: 0;
}

body {
	background: #070c23;
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
	text-align: center;
	color: #2c3e50;
}

.dashboard {
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
</style>
