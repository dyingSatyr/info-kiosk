<template>
	<header>
		<Clock />
	</header>
</template>

<script>
import Clock from './Clock'

export default {
	name: 'Header',
	components: {
		Clock
	}
}
</script>

<style scoped>
header {
	background: #333;
	color: #fff;
	padding: 20px;
	height: 100px;
}
</style>
