<template>
	<div class="create-task">
		<h3>Create Task</h3>

		<form>
			<div class="mb-4 row">
				<label for="task-description" class="col-form-label"
					>Task Description</label
				>
				<div class="col-auto">
					<input
						type="text"
						v-model="task.taskDescription"
						class="form-control"
						id="task-description"
					/>
				</div>
			</div>
			<div class="col-auto">
				<button
					type="submit"
					@click="createTask"
					class="btn btn-primary mb-3"
				>
					Create Task
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			task: { taskDescription: "" },
		};
	},
	methods: {
		createTask: function () {
			this.$store.dispatch("createTask", {
				taskDescription: this.task.taskDescription,
			});
		},
	},
};
</script>

<style scoped>
.create-task {
	float: left;
	max-width: 270px;
}
</style>