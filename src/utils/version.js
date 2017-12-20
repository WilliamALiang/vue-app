import store from '../vuex/store'
import cache from './cache'

const version = {
	ready(){
		document.addEventListener("deviceready", () => {
			this.check()
			this.bindEvent()
		}, false);
	},
	check(){
		store.commit('TOGGLE_POPUP', {visible: true, text: '正在检测&下载新版本'})
		chcp.getVersionInfo((err, data) => {
			if(store.state.common.app.version != data.currentWebVersion){
				store.commit('UPDATE_VERSION', data.currentWebVersion)
			}
			alert(window.Config.updateConfig)
			if(window.Config.updateConfig){
				alert('当前版本太旧，需重新安装新版本！')
				window.open('https://chenjia.github.io/vue-app/demo/index.html');
			}
		})
	},
	update(){
		chcp.fetchUpdate(() => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '正在检测&下载新版本'})
		}, {
			'config-file': window.Config.updateConfig
		})
	},
	bindEvent(){
		document.addEventListener('chcp_updateIsReadyToInstall', (a) => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '正在安装更新包'})
		}, false);
		
		document.addEventListener('chcp_updateLoadFailed', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '获取更新包失败'})
			setTimeout(()=>{
				store.commit('TOGGLE_POPUP', {visible: false, text: ''})
			},1000)
		}, false);

		document.addEventListener('chcp_nothingToUpdate', () => {
			store.commit('TOGGLE_POPUP', {visible: true, text: '已经是最新版本'})
			setTimeout(()=>{
				store.commit('TOGGLE_POPUP', {visible: false, text: ''})
			},1000)
		}, false);
	}
};

version.ready()

export default version