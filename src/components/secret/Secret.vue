<template lang="pug">
	.secret_wrapper
		#snow
		.secret

		.friends
			.friend.friend-animation(
				v-for="(friend, key) in friends"
			)

				.friend__header
					.friend__header__title
						.friend__header__close(
							v-if="key > 1"
							v-on:click="popFriend(key)"
						) x

				.friend__input
					input(
						v-model="friend.email"
						type="text",
						:placeholder="friend.main ? 'your email': 'email'"
					)
					input(
						v-model="friend.name"
						type="text",
						:placeholder="friend.main ? 'your name': 'name'"
					)

		button.btn_friend(
		v-on:click="addFriend()"
		)
			| + ADD A FRIEND

		.friends__error.animated.shake(v-if="errors.friends") Hey, falta rellenar algún email/nombre!
		.city_picker__error.shake.animated(v-if="errors.city") No has seleccionado ninguna ciudad! :(
		button.btn_start(
			v-on:click="shuffle()"
		)
			| HO-HO-HO

</template>

<script>
import ShuffleService from '../../services/ShuffleService'
import EmailService from '../../services/EmailService'

export default {
  name: 'secret',
  data () {
    return {
      friend: {},
	  errors: {
	  	friends: null,
	  },
	  friends: [
			{name:"",email:"", main:true},
			{name:"",email:"", main:false},
			{name:"",email:"", main:false},
			{name:"",email:"", main:false},
			{name:"",email:"", main:false},
			{name:"",email:"", main:false}
		]
    }
  },
  methods: {
    popFriend: function (key){
		this.errors.friends = false;
		this.friends.splice(key, 1);
    },
    addFriend: function () {
    	this.errors.friends = false
		this.friends.push({name:"",email:"", main:false})
    },
    shuffle: function () {
    	this.errors.friends = false
		var result = ShuffleService.checkFriends(this.friends)
		this.friends = result.friends

		if (!result.error) {
			ShuffleService.setPeople(result.friends);
			EmailService.sendEmails(this.draw())
			.then((result) => {
				this.$router.push({name:'end'});
			})
			.catch((result) => {
				console.log(":(");
			})
		}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
	gl-red   = #ff5a5a
	.secret
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 0;
		justify-content flex-start

		&_wrapper
			display flex
			flex-direction column

	.city_picker
		margin-bottom: 30px;
		/* background: #c24246 !important; */
		border-radius: 3px;

		&__error
			text-align center
			color: white;
			font-size: 10px;
			margin-bottom:5px;

	.friends
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		max-width: 1100px;

		&__error
			color: white;
			font-size: 10px;
			margin-bottom:5px;

	.friend
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
		height 120px;
		padding: 10px;
		max-width 240px;

		&__header
			color: white;
			display: flex

			&__title
				flex 1

			&__close
				cursor: pointer;
				flex: 0 0 20px;
				width 20px
				height 20px
				line-height 16px
				text-align center

				&:hover
					border 1px solid white!important
					border-radius 10px;



		&__input input
			margin: 5px 0;
			border: 0px;
			border-radius: 3px;
			padding: 10px;
			height: 30px;
			min-width: 140px;
			width: 220px;
			font-size: 14px;
			font-family: HalisBook;
	.btn-ss
		background-color: #c24246;
		border: 0;
		font-family: HalisBook;
		color: white;
		width:100%

		&:focus
			outline:0!important
			color: white!important

		&:hover
			color white;

	.dropdown-ss
		background-color: rgb(194, 66, 70);
		color: white;

		& li a
			color: white;
			font-family: HalisBook;

			&:hover
				background-color #CE676B
				color white
				cursor: pointer

	button.btn_friend
		width: 200px;
		border: 0;
		background: transparent;
		color: white;
		cursor: pointer;
		margin: 20px auto;
		border-radius: 13px;
		padding: 10px;
		text-transform: uppercase

		&:focus
			outline:0;
		&:hover
			background-color white
			color gl-red
		&:active
			background-color #f7f7f7
			color gl-red
</style>

