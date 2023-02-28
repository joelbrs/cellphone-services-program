<template>
	<h1>Test</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import { getServices } from '@/services/services'

export default Vue.extend({
	methods: {
		async getServices() {
			const [error, data] = await getServices()

			if (error) return
		}
	},

	created() {
		this.getServices()
	}
})
</script>

