<template>
    <Welcome />
    <div class="content">
        <div class="container mt-4">
            <div class="info">
                <h2>Informácie o serveri </h2>
            </div>
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
                <!-- Blog Post Column -->
                <h1 class="news-heading text-uppercase">Top novinky</h1>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12 mb-4" v-for="post in blogs" :key="post.id">
                            <BlogPost :post="post" />
                        </div>
                    </div>
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
    </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import BlogPost from '@/components/BlogPost.vue'
import { useBlogStore } from '@/stores/blogs';
import { useServerStore } from '@/stores/servers';
import LatestForumPost from '@/components/LatestForumPost.vue';
import ServerInfo from '@/components/ServerInfo.vue';
import NavigationLinks from '@/components/NavigationLinks.vue';
import SocialLinks from '@/components/SocialLinks.vue';

export default {
    components: {
        Welcome,
        BlogPost,
        LatestForumPost,
        NavigationLinks,
        SocialLinks,
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

<style scope>
.news-heading {
    color: var(--color-heading);
    text-transform: uppercase;
}

.content {
    background: var(--color-background);
}
</style>