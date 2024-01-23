<template>
    <Welcome />
    <div class="container mt-5 mb-5">
        <div class="row">
            <!-- ServerInfo -->
            <div class="col-12 col-lg-4 mb-3">
                <ServerInfo :servers="servers" />
            </div>

            <!-- NavigationLinks -->
            <div class="col-12 col-lg-4 mb-3">
                <NavigationLinks />
            </div>

            <!-- SocialLinks -->
            <div class="col-12 col-lg-4 mb-3">
                <SocialLinks />
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <BlogDetail />
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
import BlogDetail from '@/components/BlogDetail.vue';
import LatestForumPost from '@/components/LatestForumPost.vue';
import NavigationLinks from '@/components/NavigationLinks.vue';
import ServerInfo from '@/components/ServerInfo.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import Welcome from '@/components/Welcome.vue';
import { useBlogStore } from '@/stores/blogs';
import { useServerStore } from '@/stores/servers';
export default {
    components: {
    BlogDetail,
    Welcome,
    LatestForumPost,
    SocialLinks,
    NavigationLinks,
    ServerInfo
},
    data() {
        return {
            blogStore: useBlogStore(),
            serverStore: useServerStore(),
        }
    },
    computed: {
        blogs() {
            return this.blogStore.getBlogs
        },
        servers() {
            return this.serverStore.getServers
        }
    },
    mounted() {
        this.blogStore.fetchBlogs();
        this.serverStore.fetchServers();
    },
}
</script>