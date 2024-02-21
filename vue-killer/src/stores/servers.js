import axios from 'axios';
import { defineStore } from 'pinia';

export const useServerStore = defineStore('server', {
  state: () => ({
    servers: []
  }),
  getters: {
    getServers: (state) => {
      return state.servers;
    },
  },
  actions: {
    async fetchServers() {
      try {
        const response = await axios.get('http://localhost:3000/vue-killer/api/getServerList.php');
        this.servers = response.data;
      } catch (error) {
        console.error('Error fetching servers:', error);
      }
    },
  },
});
