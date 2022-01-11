<template>
	<div class="updatable-task-admin">
		<form>
			<div class="col-auto">
				<div class="form-check">
					<input
						@input="update"
						type="text"
						v-model="description"
						class="form-control"
					/>
					<input
						@change="update"
						class="form-check-input"
						type="checkbox"
						value="completed"
						v-model="completed"
					/>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "UpdatableTaskAdmin",
	props: ["index", "task"],
	data() {
		return {
			completed: this.task.completed,
			description: this.task.description,
		};
	},
	methods: {
		update: function () {
			this.$store.dispatch("updateTask", {
				index: this.index,
				completed: this.completed,
				description: this.description,
			});
		},
	},
};
</script>