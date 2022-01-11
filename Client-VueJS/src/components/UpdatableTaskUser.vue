<template>
	<div class="updatable-task-user">
		<form>
			<div class="col-auto">
				<div class="form-check">
					<label v-bind:for="'task' + index" class="form-check-label"
						>{{ task.description }}
					</label>
					<input
						@change="update"
						class="form-check-input"
						type="checkbox"
						value="completed"
						v-model="completed"
						v-bind:id="'task' + index"
					/>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "UpdatableTaskUser",
	props: ["index", "task"],
	data() {
		return {
			completed: this.task.completed,
		};
	},
	methods: {
		update: function () {
			this.$store.dispatch("updateTask", {
				index: this.index,
				completed: this.completed,
			});
		},
	},
};
</script>