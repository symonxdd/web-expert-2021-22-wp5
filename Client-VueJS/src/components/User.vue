<template>
	<div class="user">
		<!-- <h1>
			Logged in as <strong>{{ $store.state.user.username }}</strong>
		</h1> -->
		<div v-if="$store.state.user.roles.includes('admin')">
			<CreateUser></CreateUser>
			<CreateTask></CreateTask>
			<GetAllTasks></GetAllTasks>
			<AssignTasks></AssignTasks>
		</div>
		<div v-else-if="$store.state.user.roles.includes('user')">
			<GetUserTasks></GetUserTasks>
		</div>
	</div>
</template>

<script>
import CreateUser from "../components/CreateUser.vue";
import CreateTask from "../components/CreateTask.vue";
import GetUserTasks from "../components/GetUserTasks.vue";
import GetAllTasks from "../components/GetAllTasks.vue";
import AssignTasks from "../components/AssignTasks.vue";

export default {
	name: "User",
	components: {
		CreateUser,
		CreateTask,
		GetUserTasks,
		GetAllTasks,
		AssignTasks,
	},
};
</script>

<style>
.user {
	width: 850px;
	margin: 0 auto;
}

.get-button {
	margin-top: 10px;
}

.create-user,
.create-task,
.get-user-tasks,
.get-all-tasks,
.assign-tasks {
	background-color: #0e0e0e;
	padding: 25px 25px 0 25px;
	border-radius: 10px;
    margin-bottom: 20px
	/* border: 1px solid #1b1b1b; */
}

.create-user,
.create-task,
.get-user-tasks {
	margin-right: 20px;
}
</style>