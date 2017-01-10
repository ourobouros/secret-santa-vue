<template lang="pug">
	.filling
		#snow
		.end
			.thanks Thanks for participating!
			.subtitle
				| Each one of your friends will receive
				span.bold &nbsp; an email &nbsp;
				| with the
				span.bold &nbsp; name of the person &nbsp;
				|to which you have to give a present.

			.regalos

			.share
				.facebook
					a(href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fglovoapp.com%2Famigoinvisible', title='Compartir en FB', target='_blank')
					img(class="shareicon" src='../../assets/images/facebook.png')
					a(href='https://twitter.com/intent/tweet?hashtags=glovamigo&url=https%3A%2F%2Fglovoapp.com%2Famigoinvisible&via=glovo_ES&text=Ya%20he%20preparado%20mi%20amigo%20invisible%20con%20Glovo&tw_p=tweetbutton', title='Comparte en Twitter', target='_blank')
					img(class="shareicon" src='../../assets/images/twitter.png')

</template>

<script>
export default {
	name: 'end',
  	data () {
    	return {}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
	.end
		display: flex;
		padding: 20px;
		flex-direction: column;
		align-items: center;
		justify-content flex-start

		@media (max-width: 450px)
			justify-content auto

	.thanks
		font-size: 33px;
		border-bottom: 1px solid white;
		padding-bottom: 10px;
		color: white;

		@media (max-width: 450px)
			font-size: 24px;

	.subtitle
		max-width: 400px;
		font-family: HalisBook;
		color: white;
		font-size: 17px;
		line-height: 22px;
		text-align: center;
		margin-top: 20px;

	.regalos
		margin-top: 20px
		background-image: url("../../assets/images/regalos.svg");
		width: 250px;
		height: 100px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;

		@media (max-width: 450px)
			width: 150px;
			height: 75px;

	.share
		margin-top: 20px;
	.shareicon
		cursor: pointer
		height: 50px
		widows: 50px
		margin: 10px

</style>
