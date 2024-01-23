<template>
    <Welcome />
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-8">
                <AdminProfileList />
            </div>
            <div class="col-md-4">
                <h4 class="forum-heading text-light text-uppercase text-center">Témy noviniek</h4>
                <div class="row">
                    <div class="col-md-12" v-for="post in blogs" :key="post.id">
                        <LatestForumPost :post="post" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminProfileList from '@/components/AdminProfileList.vue';
import LatestForumPost from '@/components/LatestForumPost.vue';
import Welcome from '@/components/Welcome.vue';
import { useBlogStore } from '@/stores/blogs';
export default {
    components: {
        AdminProfileList,
        Welcome,
        LatestForumPost
    },
    data() {
        return {
            blogStore: useBlogStore(),
        }
    },
    computed: {
        blogs() {
            return this.blogStore.getBlogs
        }
    },
    mounted() {
        this.blogStore.fetchBlogs();
    },
}
</script>