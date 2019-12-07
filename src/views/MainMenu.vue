<template>
	<div id="menu-container">
		<Header />
		<Menu :meals="meals" />
		<Cart />
		<router-link to="/">Back to screensaver</router-link>
	</div>
</template>

<script>
import Menu from '@/components/Menu'
import Header from '@/components/Header'
import Cart from '@/components/Cart'

import data from '@/data/menu'
const { meals, beverages, topings } = data

export default {
	name: 'app',
	components: {
		Header,
		Menu,
		Cart
	},
	data: function() {
		return {
			idle: true,
			meals,
			beverages,
			topings
		}
	}
}
</script>

<style></style>
