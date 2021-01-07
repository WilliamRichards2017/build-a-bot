import axios from 'axios';

export default {
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {

  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then((result) => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};
