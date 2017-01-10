<template lang="pug">
	div
		#snow
		.landing
			.hints
				.step
					.step__number 1
					.step__image.step__image__sobre
					.step__text
						| Añade tu
						span.bold &nbsp;email&nbsp;
						| y el de
						span.bold &nbsp;tus amigos&nbsp;


				.step
					.step__number 2
					.step__image.step__image__gente
					.step__text
						| A cada uno se le adjudicará un amigo de
						span.bold &nbsp;forma aleatoria&nbsp;

				.step
					.step__number 3
					.step__image.step__image__mailbox
					.step__text
						| Todos recibiréis un
						span.bold &nbsp;email&nbsp;
						| con el
						span.bold &nbsp;"amigo invisible"&nbsp;
						| que os haya tocado

			button.btn_start(
				@click="start"
			)
				| Empezar a

</template>

<script>

export default {
	name: 'landing',
  	data () {
    	return {}
  	},
	methods: {
		start: function(event) {
			this.$router.push({name:'secret'});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
	gl-green = #25ae91
	gl-red   = #ff5a5a
	glovo-yellow=  #f2cc38
	glovo-background-container= #e3e6e7
	facebook = #3b5998
	.landing
		display: flex;
		padding: 20px;
		flex-direction: column;
		align-items: center;
		justify-content flex-start

		@media (max-width: 450px)
			justify-content auto


	.hints
		display: flex;
		flex-direction: row;
		margin: 20px;
		justify-content center

		@media (max-width: 450px)
			flex-direction column

	.step
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px;
		max-width: 240px;


		&__number
			height: 30px;
			width: 30px;
			line-height: 30px;
			/* display: flex; */
			text-align: center;
			border: 1px solid #fff;
			/* padding: 4px 10px; */
			border-radius: 15px;
			font-size: 20px;

			@media (max-width: 450px)
				height: 20px;
				width: 20px;
				line-height: 20px;
				border-radius: 10px;
				font-size: 10px;



		&__text
			text-align: center;
			margin-top: 10px;
			font-size: 14px;
			font-family: HalisBook;

		&__image
			margin-top: 20px;
			width: 50px;
			height: 50px;
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;

			&__sobre
				background-image: url("../../assets/images/sobre.svg");
			&__gente
				width 70px
				background-image: url("../../assets/images/gente.svg");
			&__mailbox
				background-image: url("../../assets/images/mailbox.svg");


	button.btn_start
		width: 200px;
		border: 1px solid white;
		background: transparent;
		color: white;
		cursor: pointer;
		margin: 20px auto;
		border-radius: 13px;
		padding: 10px;
		text-transform: uppercase
		transition all 0.1s linear

		&:focus
			outline:0;
		&:hover
			background-color white
			color gl-red
		&:active
			background-color #f7f7f7
			color gl-red
</style>
