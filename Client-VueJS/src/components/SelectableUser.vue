<template>
	<div class="selectable-user">
		<label :for="'user' + index" class="form-check-label"
			>{{ user.username }}
		</label>
		<input
			type="radio"
			class="form-check-input"
			v-model="selectedUserId"
			:value="user._id"
			:id="'user' + index"
			:checked="index == 0"
			@change="update"
			name="users"
		/>
	</div>
</template>

<script>
export default {
	name: "SelectableUser",
	props: ["index", "user"],
	data() {
		return {
			selectedUserId: this.user._id,
		};
	},
	methods: {
		update: function () {
			this.$store.dispatch("updateSelectedUserId", {
				selectedUserId: this.selectedUserId,
			});
		},
	},
};
</script>