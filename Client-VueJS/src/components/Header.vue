<template>
	<div class="header">
		<img id="logo" src="@/assets/logo.png" />
		<p id="caption">WebPacket 5</p>

		<nav>
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li v-if="$store.state.token && $store.state.user">
					<router-link to="/profile">Profile</router-link>
				</li>
				<li v-if="$store.state.token && $store.state.user">
					<button @click="logout">Logout</button>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	methods: {
		logout: function () {
			this.$store.dispatch("logout");
			this.$router.push("/");
		},
	},
};
</script>

<style scoped>
.header {
	height: 110px;
	background-color: #1f1f1f;
	margin-bottom: 70px;
	padding-right: 20px;
}

#logo {
	float: left;
	width: 125px;
	margin: 20px 0 0 20px;
}

#caption {
	float: left;
	font-size: 25px;
	color: #c9c9c9;
	padding: 35px 0 0 75px;
}

nav {
	margin: 30px 0 20px 0;
	float: right;
}

nav a.router-link-exact-active {
	background-color: #74547c;
	color: #c9c9c9;
}

nav ul {
	list-style-type: none;
	margin: 0;
}

nav ul li {
	float: left;
}

nav ul li button {
	border: none;
	background-color: transparent;
}

nav ul li a,
nav ul li button {
	display: block;
	color: #d3d3d3;
	padding: 14px 16px;
	text-decoration: none;
	transition: 0.1s;
}

nav ul li a:hover,
nav ul li button:hover {
	background-color: #6b6b6b;
}
</style>