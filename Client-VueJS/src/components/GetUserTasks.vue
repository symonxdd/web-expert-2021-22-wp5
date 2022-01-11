<template>
	<div class="get-user-tasks">
		<h3>Get My Tasks</h3>

		<button
			type="submit"
			@click="getUserTasks"
			class="btn btn-primary mb-3 get-button"
		>
			Get
		</button>

		<div v-if="$store.state.tasks.length">
			<div v-for="(task, index) in $store.state.tasks">
				<UpdatableTaskUser
					:last-task="index == $store.state.tasks.length - 1"
					v-bind:task="task"
					v-bind:index="index"
				></UpdatableTaskUser>
			</div>
		</div>
	</div>
</template>

<script>
import UpdatableTaskUser from "./UpdatableTaskUser.vue";

export default {
	name: "getUserTasks",
	components: {
		UpdatableTaskUser,
	},
	methods: {
		getUserTasks: function () {
			this.$store.dispatch("getUserTasks");
		},
	},
};
</script>

<style scoped>
.get-user-tasks {
	float: left;
	max-width: 251px;
}

[last-task="true"] {
	margin-bottom: 15px;
}
</style>