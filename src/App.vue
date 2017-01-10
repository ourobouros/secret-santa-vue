<template lang="pug" type="text/pug">
	.root.center
		router-link(
			:to="{path: '/'}"
		)
			.logo.animated.swing
		router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	// todo: comentar estos import

	gl-green = #25ae91
	gl-red   = #ff5a5a
	glovo-yellow=  #f2cc38
	glovo-background-container= #e3e6e7
	facebook = #3b5998

	@font-face
		font-family: HalisRegular
		src url("./assets/fonts/halis-regular.otf") format('opentype')

	@font-face
		font-family: HalisBook
		src url("./assets/fonts/halis-book.otf") format('opentype')

	@font-face
		font-family: HalisBold
		font-weight: bold
		src url("./assets/fonts/halis-bold.otf") format('opentype')


	body
		background-color: gl-red !important;
		font-family: HalisRegular;
		font-size: 14px;

	.bold
		font-family: HalisBold;

	.center
		justify-content: center;

	.logo
		background-image: url("./assets/images/ss-logo.svg");
		width: 250px;
		height: 250px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		cursor: pointer;

		@media (max-width: 450px)
			width: 150px;
			height:150px;

	.swing
		animation swing 1.5s

	.root
		padding 20px
		align-items: center;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		position relative

	#snow
		background-image: url('./assets/images/s1.png'), url('./assets/images/s2.png'), url('./assets/images/s3.png');
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index:-1;
		-webkit-animation: snowing 10s linear infinite;
		-moz-animation: snowing 10s linear infinite;
		-ms-animation: snowing 10s linear infinite;
		animation: snowing 10s linear infinite;

	@keyframes snowing
		0% {background-position: 500px 500px, 200px 200px, 0px 0px;}
		100% {background-position: 500px 1000px, 200px 600px, 0px 300px;}


	.friend-animation
		&.ng-enter
		&.ng-leave
			-webkit-transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
			-moz-transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
			-ms-transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
			-o-transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
			transition: 400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;
			position: relative;
			display: block;


		&.ng-leave.ng-leave-active
		&.ng-enter
			opacity: 0;
			top: -150px;
			height: 0;

		&.ng-enter.ng-enter-active
		&.ng-leave
			opacity: 1;
			top: 0;
			height: 120px;
</style>
