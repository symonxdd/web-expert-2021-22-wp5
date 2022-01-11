<template>
	<div class="get-all-users">
		<h5>All Users</h5>

		<div v-if="$store.state.users.length">
			<form>
				<div class="col-auto">
					<div class="form-check">
						<div v-for="(user, index) in $store.state.users">
							<SelectableUser
								v-bind:user="user"
								v-bind:index="index"
								:last-item="
									index == $store.state.users.length - 1
								"
							></SelectableUser>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import SelectableUser from "./SelectableUser.vue";

export default {
	name: "GetAllUsers",
	components: {
		SelectableUser,
	},
	mounted() {
		this.getAllUsers();
	},
	methods: {
		getAllUsers: function () {
			this.$store.dispatch("getAllUsers");
		},
	},
};
</script>

<style scoped>
.get-all-users {
	float: left;
	max-width: 251px;
}

[last-item="true"] {
	margin-bottom: 15px;
}
</style>