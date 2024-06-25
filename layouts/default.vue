<script lang="ts" setup>
import { getRandomColor } from "../utils/get-random-color";

const date = new Date();
const formatter = new Intl.DateTimeFormat(["en"], { timeStyle: "full" });

const style = `background-color: ${getRandomColor()};`;
</script>

<template>
	<div>
		<header :style="style">
			<div>The header</div>
			<time :datetime="date.toISOString()">{{ formatter.format(date) }}</time>
			<nav>
				<ul>
					<li>
						<NuxtLink href="/entities">All entities</NuxtLink>
					</li>
					<li>
						<NuxtLink href="/entities/123">Entity 123</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>
		<slot />
		<footer>
			<div>The footer</div>
		</footer>
	</div>
</template>
