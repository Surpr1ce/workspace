import axios from 'axios';
import { defineStore } from 'pinia';

export const useAdminStore = defineStore('admin', {
  state: () => ({
    admins: []
  }),
  getters: {
    getAdmins: (state) => {
      return state.admins;
    },
  },
  actions: {
    async fetchAdmins() {
      try {
        const response = await axios.get('http://localhost:3000/vue-killer/api/fetchAdmins.php');
        this.admins = response.data;
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    },
  },
});
