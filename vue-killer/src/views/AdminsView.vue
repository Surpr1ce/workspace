<template>
    <Welcome />
    <div class="container mt-5 mb-5">
        <div class="row">
            <!-- ServerInfo -->
            <div class="col-12 col-lg-4 mb-3">
                <ServerInfo :servers="serverStore" />
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
import NavigationLinks from '@/components/NavigationLinks.vue';
import ServerInfo from '@/components/ServerInfo.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import Welcome from '@/components/Welcome.vue';
import { useBlogStore } from '@/stores/blogs';
export default {
    components: {
        AdminProfileList,
        Welcome,
        LatestForumPost,
        SocialLinks,
        NavigationLinks,
        ServerInfo
    },
    data() {
        return {
            blogStore: useBlogStore(),
            serverStore: [
                {
                    server_id: 403211,
                    hostname: 'RealGamingCZ Tester',
                    is_running: true,
                    ip: '82.208.17.10',
                    port: 27280,
                    players: 10,
                    slots: 100
                },
                {
                    server_id: 403211,
                    hostname: 'RealGamingCZ Tester 2',
                    is_running: false,
                    ip: '82.208.17.10',
                    port: 28280,
                    players: 9,
                    slots: 100
                }
            ]
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