<template>
	<div class="user-profile">
		<ul>
			<li>
				Logged in as <strong>{{ $store.state.user.username }}</strong>
			</li>
			<li>Roles: {{ $store.state.user.roles }}</li>
			<li>
				Task Amount:
				<span v-if="$store.state.user.taskAmount > 0">
					{{ $store.state.user.taskAmount }}
				</span>
				<span v-else>(no tasks)</span>
			</li>
		</ul>
	</div>
</template>