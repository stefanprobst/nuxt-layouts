<script lang="ts" setup>
import { getRandomColor } from '../utils/get-random-color'

const date = new Date();
const formatter = new Intl.DateTimeFormat(["en"], { timeStyle: "full" });

const style = `background-color: ${getRandomColor()};`
</script>

<template>
	<main :style="style">
		<h1>Entities</h1>
		<time :datetime="date.toISOString()">{{ formatter.format(date) }}</time>
		<slot />
	</main>
</template>
