import { createStore } from "vuex"
import axios from "axios";

const url = "http://localhost:3000";

export default createStore({
    state: {
        user: null,
        token: "",
        tasks: [],
        unassignedTasks: [],
        users: [],
        error: "",
        selectedUserId: "",
        selectedTaskIds: []
    },
    actions: {
        updateSelectedUserId: async function ({ commit, state }, payload) {
            const selectedUserId = payload.selectedUserId;
            commit("_updateSelectedUserId", selectedUserId);
        },
        updateSelectedTaskIds: async function ({ commit, state }, payload) {
            const selectedTaskId = payload.selectedTaskId;
            commit("_updateSelectedTaskIds", selectedTaskId);
        },
        login: async function ({ commit, state }, payload) {
            try {
                commit("_reset");

                const username = payload.username;
                const password = payload.password;

                const response = await axios.post(`${url}/user/login`, { username, password })
                    .then(response => {
                        commit("_updateUser", response.data.user);
                        commit("_updateToken", response.data.token);
                    })
                    .catch(error => {
                        const status = error.response.status;
                        const statusText = error.response.statusText;
                        const message = error.response.data.error;

                        const userfulErrorMessage = `<span class="error-status">${status} ${statusText}</span>\n<span class="error-description">${message}</span>`;

                        commit("_updateError", userfulErrorMessage);
                    });
            } catch (error) {
                console.log(error);
            }
        },
        logout: async function ({ commit, state }, payload) {
            commit("_reset");
        },
        createUser: async function ({ commit, state }, payload) {
            try {
                commit("_updateError", "");
                const username = payload.username;
                const password = payload.password;
                const roles = payload.roles;

                const token = state.token;
                const axiosConfiguration = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                let response = await axios.post(`${url}/user/create`, { username, password, roles }, axiosConfiguration)
                    .then()
                    .catch(error => {
                        const status = error.response.status;
                        const statusText = error.response.statusText;
                        const message = error.response.data.error;

                        const userfulErrorMessage = `<span class="error-status">${status} ${statusText}</span>\n<span class="error-description">${message}</span>`;

                        commit("_updateError", userfulErrorMessage);
                    });
            } catch (error) {
                console.log(error);
            }
        },
        createTask: async function ({ commit, dispatch, state }, payload) {
            try {
                commit("_updateError", "");
                const taskDescription = payload.taskDescription;

                const token = state.token;
                const axiosConfiguration = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                let response = await axios.post(`${url}/user/create/task`, { taskDescription }, axiosConfiguration)
                    .then(response => {
                        dispatch('getUnassignedTasks');
                    })
                    .catch(error => {
                        const status = error.response.status;
                        const statusText = error.response.statusText;
                        const message = error.response.data.error;

                        const userfulErrorMessage = `<span class="error-status">${status} ${statusText}</span>\n<span class="error-description">${message}</span>`;

                        commit("_updateError", userfulErrorMessage);
                    });


            } catch (error) {
                console.log(error);
            }
        },
        getUserTasks: async function ({ commit, state }) {
            try {
                commit("_updateError", "");

                const token = state.token;
                const axiosConfiguration = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                let response = await axios.get(`${url}/user/${state.user._id}/tasks`, axiosConfiguration)
                    .then(response => {
                        commit("_updateTasks", response.data)
                    })
                    .catch(error => {
                        const status = error.response.status;
                        const statusText = error.response.statusText;
                        const message = error.response.data.error;

                        const userfulErrorMessage = `<span class="error-status">${status} ${statusText}</span>\n<span class="error-description">${message}</span>`;

                        commit("_reset");
                        commit("_updateError", userfulErrorMessage);
                    });
            } catch (error) {
                console.log(error);
            }
        },
        getAllTasks: async function ({ commit, state }) {
            try {
                commit("_updateError", "");

                const token = state.token;
                const axiosConfiguration = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                let response = await axios.get(`${url}/user/${state.user._id}/tasks/all`, axiosConfiguration)
                    .then(response => {
                        commit("_updateTasks", response.data)
                    })
                    .catch(error => {
                        const status = error.response.status;
                        const statusText = error.response.statusText;
                        const message = error.response.data.error;

                        const userfulErrorMessage = `<span class="error-status">${status} ${statusText}</span>\n<span class="error-description">${message}</span>`;

                        commit("_updateError", userfulErrorMessage);
                    });
            } catch (error) {
                console.log(error);
            }
        },
        getUnassignedTasks: async function ({ commit, state }) {
            try {
                commit("_updateError", "");

                const token = state.token;
                const axiosConfiguration = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                let response = await axios.get(`${url}/user/${state.user._id}/tasks/unassigned`, axiosConfiguration)
                    .then(response => {
                        commit("_updateUnassignedTasks", response.data)
                    })
                    .catch(error => {
                        const status = error.response.status;
                        const statusText = error.response.statusText;
                        const message = error.response.data.error;

                        const userfulErrorMessage = `<span class="error-status">${status} ${statusText}</span>\n<span class="error-description">${message}</span>`;

                        commit("_updateError", userfulErrorMessage);
                    });
            } catch (error) {
                console.log(error);
            }
        },
        getAllUsers: async function ({ commit, state }) {
            try {
                commit("_updateError", "");

                const token = state.token;
                const axiosConfiguration = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                let response = await axios.get(`${url}/user/${state.user._id}/users/all`, axiosConfiguration)
                    .then(response => {
                        commit("_updateUsers", response.data)
                        commit("_updateSelectedUserId", response.data[0]._id);

                    })
                    .catch(error => {
                        const status = error.response.status;
                        const statusText = error.response.statusText;
                        const message = error.response.data.error;

                        const userfulErrorMessage = `<span class="error-status">${status} ${statusText}</span>\n<span class="error-description">${message}</span>`;

                        commit("_updateError", userfulErrorMessage);
                    });
            } catch (error) {
                console.log(error);
            }
        },
        updateTask: async function ({ commit, state }, payload) {
            try {
                commit("_updateError", "");

                const token = state.token;
                const axiosConfiguration = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const index = payload.index;
                const completed = payload.completed;
                const description = payload.description;

                const taskId = state.tasks[index]._id;

                const response = await axios.patch(`${url}/user/${state.user._id}/task/${taskId}`, { completed, description }, axiosConfiguration)
                    .then(response => {
                        commit("_updateTask", { index, completed, description })
                    })
                    .catch(error => {
                        const status = error.response.status;
                        const statusText = error.response.statusText;
                        const message = error.response.data.error;

                        const userfulErrorMessage = `<span class="error-status">${status} ${statusText}</span>\n<span class="error-description">${message}</span>`;

                        commit("_updateError", userfulErrorMessage);
                    });
            } catch (error) {
                console.log(error);
            }
        },
        assignTasksToUser: async function ({ commit, dispatch, state }) {
            try {
                commit("_updateError", "");

                const token = state.token;
                const axiosConfiguration = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const userId = state.selectedUserId;
                const taskIds = state.selectedTaskIds;

                const response = await axios.patch(`${url}/user/${userId}/tasks/`, { taskIds }, axiosConfiguration)
                    .then(response => {
                        dispatch('getUnassignedTasks');
                        commit("_updateSelectedTaskIds", []);
                    })
                    .catch(error => {
                        const status = error.response.status;
                        const statusText = error.response.statusText;
                        const message = error.response.data.error;

                        const userfulErrorMessage = `<span class="error-status">${status} ${statusText}</span>\n<span class="error-description">${message}</span>`;

                        commit("_updateError", userfulErrorMessage);
                    });
            } catch (error) {
                console.log(error);
            }
        }
    },
    mutations: {
        _reset(state) {
            state.user = null;
            state.tasks = [];
            state.unassignedTasks = [];
            state.users = [];
            state.token = "";
            state.error = "";
            state.selectedUserId = "";
            state.selectedTaskIds = [];
        },
        _updateUser(state, payload) {
            state.user = payload;
        },
        _updateSelectedUserId(state, payload) {
            state.selectedUserId = payload;
        },
        _updateSelectedTaskIds(state, payload) {
            if (payload.length == 0) {
                state.selectedTaskIds = [];
                return;
            }
            if (state.selectedTaskIds.includes(payload)) {
                var index = state.selectedTaskIds.indexOf(payload);
                if (index !== -1) {
                    state.selectedTaskIds.splice(index, 1);
                }
            }
            else {
                state.selectedTaskIds.push(payload);
            }
        },
        _updateToken(state, payload) {
            state.token = payload;
        },
        _updateError(state, payload) {
            state.error = payload;
        },
        _updateTasks(state, payload) {
            state.tasks = payload;
        },
        _updateUnassignedTasks(state, payload) {
            state.unassignedTasks = payload;
        },
        _updateUsers(state, payload) {
            state.users = payload;
        },
        _updateTask(state, payload) {
            state.tasks[payload.index].completed = payload.completed;
            if (payload.description != undefined) {
                state.tasks[payload.index].description = payload.description;
            }
        }
    }
})