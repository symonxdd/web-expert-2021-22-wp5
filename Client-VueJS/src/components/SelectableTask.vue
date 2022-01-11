<template>
	<div class="selectable-task">
		<div class="form-check">
			<input
				@change="update"
				class="form-check-input"
				type="checkbox"
				:value="selectedTaskId"
				v-model="selectedTaskIds"
				:id="'task' + index"
			/>
			<label :for="'task' + index" class="form-check-label"
				>{{ task.description }}
			</label>
		</div>
	</div>
</template>

<script>
export default {
	name: "SelectableTask",
	props: ["index", "task"],
	data() {
		return {
			selectedTaskId: this.task._id,
			selectedTaskIds: [],
		};
	},
	methods: {
		update: function () {
			this.$store.dispatch("updateSelectedTaskIds", {
				selectedTaskId: this.selectedTaskId,
			});
		},
	},
};
</script>