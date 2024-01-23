import axios from 'axios'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
    state: () => ({
        blogs: []
    }),
    getters: {
        getBlogs: (state) => {
            return state.blogs;
        },
        getBlogById: (state) => (blogId) => {
            return state.blogs.find(blog => blog.id === blogId);
        },
    },
    actions: {
        async fetchBlogs() {
            try {
                const response = await axios.get('http://localhost:3000/vue-killer/api/fetchBlogs.php');
                this.blogs = response.data;
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        }
    }
})