<template>
	<view class="home">
		<!-- ============== 用户信息模块 ============== -->
		<view class="userinfo">
			<text class="userinfo__name">名字: [{{userInfo.name}}]</text>
			<text class="userinfo__sex">性别: [{{userInfo.sex}}]</text>
		</view>
		
		<!-- ============== 测试按钮 ============== -->
		<view class="test">
			<button class="test__btn" @click="handleClick">
				测试
			</button>
		</view>
		
		<view class="time">
			{{1585292089000 | dateFormat('yyyy-MM-dd hh:mm')}}
		</view>
	</view>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';
	import eventListener from '@/eventBus';
	
	export default {
		data() {
			return {
				
			};
		},
		
		onLoad() {
			this['SET_USERINFO']({
				name: '张三',
				sex: '男'
			});
			
			eventListener['TEST_ON'](() => {
				console.log('事件中转触发');
			});
		},
		
		onReady() {
			console.log(this.userInfo);
		},
		
		methods: {
			...mapMutations(['SET_USERINFO']),
					
			handleClick() {
				eventListener['TEST_EMIT']();
			}
		},
		
		computed: {
			...mapGetters(['userInfo'])
		}
	}
</script>

<style lang="scss" scoped>

</style>
