<template>
	<div class="master">
		<Header></Header>
		<div class="error-message" v-if="$store.state.error">
			<div v-html="$store.state.error"></div>
		</div>
	</div>
	<router-view />
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	name: "App",
	components: {
		Header,
	},
};
</script>

<style>
#app {
	font-family: Montserrat, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	background-color: #161616;
	height: 98vh;
	width: 1000px;
	margin: 0 auto;
}

body {
	background-color: #161616;
}

label {
	color: #c9c9c9;
}

h1 {
	margin-bottom: 25px;
}

h1,
h2 {
	color: #c9c9c9;
}

h3 {
	width: 369px;
	color: #41b883;
}

h5 {
	color: #aa3077;
}

a:link,
a:visited,
a:hover,
a:active {
	text-decoration: none;
}

.error-message {
	display: inline-block;
	position: relative;
	top: -45px;
	left: 140px;
	max-width: 555px;
	padding: 10px 25px;
	background-color: #702929;
	/* border: 1px solid #7e7e7e; */
	text-shadow: 0 2px 8px #252525;
	color: #cecece;
	font-weight: bold;
	border-radius: 5px;
	white-space: pre-line;
}

.error-status {
	color: #c9c9c9;
}
.error-description {
	color: #c9c9c9;
	font-size: 14px;
}

.duplicate-key {
	background-color: #161616;
	padding: 3px 10px;
	border-radius: 12px;
}

@media only screen and (max-width: 1033px) {
	#app {
		width: 100vw;
		padding: 0 20px 0 20px;
	}
}
</style>
