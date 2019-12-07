<template>
	<p v-text="currentTime"></p>
</template>

<script>
import moment from 'moment'

export default {
	name: 'Clock',
	data: function() {
		return {
			currentTime: ''
		}
	},
	methods: {
		updateCurrentTime() {
			this.currentTime = moment().format('LTS')
		}
	},
	created() {
		this.currentTime = moment().format('LTS') //to display immediately, not after 1 second
		setInterval(() => this.updateCurrentTime(), 1000) //Update time each second
	}
}
</script>

<style scoped></style>
