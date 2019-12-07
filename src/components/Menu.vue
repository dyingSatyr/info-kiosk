<template>
	<div id="menu">
		<article v-for="meal in meals" :key="meal.id">
			<h1>{{ meal.name }}</h1>
			<img :src="getImagePath(meal.image)" :alt="meal.name" />
			<div class="item-info">
				<p class="price">${{ meal.price }}</p>
				<button>Add</button>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: 'Menu',
	props: {
		meals: Array
	},
	methods: {
		getImagePath(filename) {
			return 'images/' + filename + '.jpg'
		}
	}
}
</script>

<style scoped>
#menu {
	display: flex;
	flex-direction: row;
}

.item-info {
	display: flex;
	justify-content: space-between;
}

article {
	background: #fff;
	padding: 20px;
	width: 250px;
	line-height: 1.3rem;
	border: 1px solid #d1d1d1;
}

h1 {
	text-align: center;
	background: #d1d1d1;
	font-size: 16px;
	font-weight: bold;
}

button {
	border: 0;
	border-radius: 5px;
	background: #dd4762;
	font-weight: bold;
	color: #fff;
	padding: 15px 30px;
	font-size: 15px;
	cursor: pinter;
}
</style>
