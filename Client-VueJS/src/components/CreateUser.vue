<template>
	<div class="create-user">
		<h3>Create User</h3>

		<form>
			<div class="mb-2 row">
				<label for="username" class="col-form-label">Username</label>
				<div class="col-auto">
					<input
						type="text"
						v-model="user.username"
						class="form-control"
						id="username"
					/>
				</div>
			</div>
			<div class="mb-2 row">
				<label for="password" class="col-form-label">Password</label>
				<div class="col-auto">
					<input
						type="password"
						v-model="user.password"
						class="form-control"
						id="password"
					/>
				</div>
			</div>
			<div class="mb-3 row">
				<label for="roles" class="col-form-label">Roles</label>
				<div class="col-auto">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							v-model="user.roles"
							value="user"
							id="roleUser"
						/>
						<label class="form-check-label" for="roleUser">
							User
						</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							v-model="user.roles"
							value="admin"
							id="roleAdmin"
						/>
						<label class="form-check-label" for="roleAdmin">
							Admin
						</label>
					</div>
				</div>
			</div>
			<div class="col-auto">
				<button
					type="submit"
					@click="createUser"
					class="btn btn-primary mb-3"
				>
					Create User
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: { username: "", password: "", roles: ["user"] },
		};
	},
	methods: {
		createUser: function () {
			this.$store.dispatch("createUser", {
				username: this.user.username,
				password: this.user.password,
				roles: this.user.roles,
			});
		},
	},
};
</script>

<style scoped>
.create-user {
	float: left;
	max-width: 270px;
	/* display: inline-block; */
}
</style>