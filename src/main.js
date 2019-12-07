import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Screensaver from './views/ScreenSaver'
import MainMenu from './views/MainMenu'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
	{
		path: '/',
		component: Screensaver
	},
	{
		path: '/menu',
		component: MainMenu
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
