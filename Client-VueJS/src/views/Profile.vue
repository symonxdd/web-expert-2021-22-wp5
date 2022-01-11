<template>
	<div class="profile">
		<div v-if="$store.state.user.roles.includes('admin')">
			<AdminProfile></AdminProfile>
		</div>
		<div v-else-if="$store.state.user.roles.includes('user')">
			<UserProfile></UserProfile>
		</div>
	</div>
</template>

<script>
import AdminProfile from "../components/AdminProfile.vue";
import UserProfile from "../components/UserProfile.vue";

export default {
	name: "Profile",
	components: {
		AdminProfile,
		UserProfile,
	},
};
</script>

<style>
.profile {
	width: 850px;
	margin: 0 auto;
}

ul {
	list-style-type: none;
}

ul li {
	color: #c9c9c9;
    margin-bottom: 7px;
}
</style>