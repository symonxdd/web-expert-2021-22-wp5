<template>
	<div class="login-form">
		<h1>Login</h1>
		<form>
			<div class="mb-3 row">
				<label for="staticEmail" class="col-form-label">Username</label>
				<div class="col-auto">
					<input
						type="text"
						v-model="user.username"
						class="form-control"
						id="staticEmail"
					/>
				</div>
			</div>
			<div class="mb-5 row">
				<label for="inputPassword" class="col-form-label"
					>Password</label
				>
				<div class="col-auto">
					<input
						type="password"
						v-model="user.password"
						class="form-control"
						id="inputPassword"
					/>
				</div>
			</div>
			<div class="col-auto">
				<button
					type="submit"
					@click="login"
					class="btn btn-primary mb-3"
				>
					Login
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: { username: "", password: "" },
		};
	},
	methods: {
		login: function () {
			this.$store.dispatch("login", {
				username: this.user.username,
				password: this.user.password,
			});
		},
	},
};
</script>

<style scoped>
label {
	color: #c9c9c9;
}

.login-form {
	max-width: 270px;
	margin: 0 auto;
	background-color: #0e0e0e;
	padding: 25px 25px 0 25px;
	border-radius: 10px;
}
</style>