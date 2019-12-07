<template>
	<div id="app">
		<transition name="view">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
.view-enter-active,
.view-leave-active {
	transition: opacity 1s ease-in-out, transform 1s ease;
}

/** Delay newly active route till previous disappears to avoid "jumping" */
.view-enter-active {
	transition-delay: 1s;
}

/** Animation start */
.view-enter,
.view-leave-to {
	opacity: 0;
	transform: translateX(-100vw);
}

/** Animation end */
.view-enter-to,
.view-leave {
	opacity: 1;
	transform: translateX(0vw);
}
</style>
