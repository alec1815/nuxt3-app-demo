<template>
	<button @click="onClick">Hello</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "Button",
	inheritAttrs: true,
	props: {
		onClick: {
			type: Function as PropType<() => void>,
			default: () => {
				/* */
			},
		},
	},
});
</script>
