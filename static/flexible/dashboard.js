function initFlexible(screenRatioByDesign = 16 / 9) {
	let docEle = document.documentElement

	function setHtmlFontSize() {
		var screenRatio = docEle.clientWidth / docEle.clientHeight
		var fontSize =
			((screenRatio > screenRatioByDesign
				? screenRatioByDesign / screenRatio
				: 1) *
				docEle.clientWidth) /
			100

		docEle.style.fontSize = fontSize.toFixed(3) + 'px'
	}

	setHtmlFontSize()

	window.addEventListener('resize', setHtmlFontSize)
}

initFlexible(16 / 9)
