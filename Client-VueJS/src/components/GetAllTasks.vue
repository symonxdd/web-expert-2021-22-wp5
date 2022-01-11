<template>
	<div class="get-all-tasks">
		<h3>Get All Tasks</h3>

		<button
			type="submit"
			@click="getAllTasks"
			class="btn btn-primary mb-3 get-button"
		>
			Get
		</button>

		<div v-if="$store.state.tasks.length">
			<div v-for="(task, index) in $store.state.tasks">
				<UpdatableTaskAdmin
					v-bind:task="task"
					v-bind:index="index"
				></UpdatableTaskAdmin>
			</div>
		</div>
	</div>
</template>

<script>
import UpdatableTaskAdmin from "./UpdatableTaskAdmin.vue";

export default {
	name: "GetAllTasks",
	components: {
		UpdatableTaskAdmin,
	},
	methods: {
		getAllTasks: function () {
			this.$store.dispatch("getAllTasks");
		},
	},
};
</script>

<style scoped>
.get-all-tasks {
	float: left;
	max-width: 270px;
	/* display: inline-block; */
}
</style>