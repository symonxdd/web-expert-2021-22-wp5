<template>
	<div class="admin-profile">
		<ul>
			<li>
				Logged in as <strong>{{ $store.state.user.username }}</strong>
			</li>
			<li id="adminStatus">Roles: {{ $store.state.user.roles }}</li>
			<li>
				Task Amount:
				<span v-if="$store.state.user.taskAmount > 0">
					{{ $store.state.user.taskAmount }}
				</span>
				<span v-else>(no tasks)</span>
			</li>
			<li>User ID: {{ $store.state.user._id }}</li>
		</ul>
	</div>
</template>

<style scoped>
pre {
	color: #c9c9c9;
}

#adminStatus {
	color: orange;
}
</style>