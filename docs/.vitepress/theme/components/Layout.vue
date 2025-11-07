<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { toggleDark } from './Dark'

import AnimateTitle from "./AnimateTitle.vue";
import backtotop from "./backtotop.vue";
import MouseFollower from "./MouseFollower.vue";

const { isDark } = useData()
// 实现切换主题过渡动画
toggleDark(isDark)
</script>

<template>
	<DefaultTheme.Layout v-bind="$attrs">
		<template #home-hero-info>
			<AnimateTitle />
		</template>
		<template #doc-footer-before>
			<backtotop />
		</template>
		<template #layout-top>
			<MouseFollower />
		</template>
		<template #layout-bottom>
		</template>
	</DefaultTheme.Layout>
</template>


<style scoped></style>
