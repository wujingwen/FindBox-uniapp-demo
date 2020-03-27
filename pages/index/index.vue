<template>
	<view class="index f-pr">
		<view class="spinner">
			<view class="spinner__double-bounce1"></view>
			<view class="spinner__double-bounce2"></view>
		</view>

		<view class="text">LOADING...</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {}
		},

		onLoad() {
			setTimeout(() => {
				uni.navigateTo({
					url: '../demo/demo'
				});
			}, 3000);
		},

		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.index {
		width: 100vw;
		height: 100vh;
		background-color: #263258;

		.text {
			color: #404a78;
			font-size: 32rpx;
			position: absolute;
			left: 50%;
			top: 48%;
			transform: translate(-50%, -50%);
		}

		.spinner {
			width: 60px;
			height: 60px;
			position: absolute;
			left: 50%;
			top: 40%;
			transform: translate(-50%, -50%);

			&__double-bounce1, &__double-bounce2 {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				background-color: #404a78;
				opacity: 0.6;
				position: absolute;
				top: 0;
				left: 0;
				-webkit-animation: bounce 2.0s infinite ease-in-out;
				animation: bounce 2.0s infinite ease-in-out;
			}

			&__double-bounce2 {
				-webkit-animation-delay: -1.0s;
				animation-delay: -1.0s;
			}
		}



		@-webkit-keyframes bounce {

			0%, 100% {
				-webkit-transform: scale(0.0)
			}

			50% {
				-webkit-transform: scale(1.0)
			}
		}

		@keyframes bounce {

			0%, 100% {
				transform: scale(0.0);
				-webkit-transform: scale(0.0);
			}

			50% {
				transform: scale(1.0);
				-webkit-transform: scale(1.0);
			}
		}
	}
</style>
