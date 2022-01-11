<template>
	<div class="get-unassigned-tasks">
		<h5>Unassigned Tasks</h5>

		<div v-if="$store.state.unassignedTasks.length">
			<div v-for="(task, index) in $store.state.unassignedTasks">
				<SelectableTask
					v-bind:task="task"
					v-bind:index="index"
					:last-item="index == $store.state.users.length - 1"
				></SelectableTask>
			</div>
		</div>
	</div>
</template>

<script>
import SelectableTask from "./SelectableTask.vue";

export default {
	name: "GetUnassignedTasks",
	components: {
		SelectableTask,
	},
	mounted() {
		this.getUnassignedTasks();
	},
	methods: {
		getUnassignedTasks: function () {
			this.$store.dispatch("getUnassignedTasks");
		},
	},
};
</script>

<style scoped>
.get-unassigned-tasks {
	float: left;
	max-width: 251px;
}

[last-item="true"] {
	margin-bottom: 15px;
}
</style>