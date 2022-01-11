<template>
	<div class="assign-tasks" v-bind:class="{ loaded: isDataLoaded }">
		<h3>Assign Tasks</h3>

		<GetAllUsers v-if="loadDataButtonisHidden"></GetAllUsers>
		<GetUnassignedTasks v-if="loadDataButtonisHidden"></GetUnassignedTasks>

		<button
			type="submit"
			v-if="!loadDataButtonisHidden"
			v-on:click="loadDataButtonisHidden = true"
			@click="dataLoaded"
			class="btn btn-primary mb-3 get-button"
		>
			Load Data
		</button>

		<button
			type="submit"
			v-if="loadDataButtonisHidden"
			class="btn btn-warning mb-3 get-button assign-tasks-button"
			@click="assignTasks"
		>
			Assign Tasks
		</button>
	</div>
</template>

<script>
import GetAllUsers from "./GetAllUsers.vue";
import GetUnassignedTasks from "./GetUnassignedTasks.vue";

export default {
	name: "AssignTasks",
	components: {
		GetAllUsers,
		GetUnassignedTasks,
	},
	data() {
		return {
			loadDataButtonisHidden: false,
			isDataLoaded: false,
		};
	},
	methods: {
		assignTasks: function () {
			this.$store.dispatch("assignTasksToUser");
		},
		dataLoaded: function () {
			this.isDataLoaded = true;
		},
	},
};
</script>

<style scoped>
.assign-tasks {
	float: left;
	max-width: 270px;
}

.assign-tasks.loaded {
	max-width: 750px;
}

.assign-tasks-button {
	float: left;
	clear: both;
}
</style>

<style>
.get-all-users,
.get-unassigned-tasks {
	margin-right: 20px;
}
</style>