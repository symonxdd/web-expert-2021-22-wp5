<template>
	<div class="home">
		<div v-if="$store.state.token && $store.state.user">
			<User></User>
		</div>
		<div v-else>
			<LoginForm></LoginForm>
		</div>
	</div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import User from "@/components/User.vue";

export default {
	name: "Home",
	components: {
		LoginForm,
		User,
	},
};
</script>
