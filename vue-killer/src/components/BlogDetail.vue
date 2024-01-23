<template>
  <div v-if="blog" class="container mt-4 mb-4 dark-bg rounded">
    <!-- Image Row -->
    <div class="row pt-3">
      <div class="col">
        <div class="image-container rounded">
          <img :src="blog.image" class="img-fluid" alt="Blog Image" />
        </div>
      </div>
    </div>

    <!-- Title and Description Row -->
    <div class="row mt-4">
      <div class="col px-5">
        <h2>{{ blog.title }}</h2>
        <hr>
        <div v-html="blog.description"></div>
      </div>
    </div>

    <!-- Author and Date Row -->
    <div class="row mt-4">
      <div class="col text-end">
        <p>napísal <strong>{{ blog.username }}</strong>, dňa {{ formattedDate }}</p>
      </div>
    </div>

  </div>
</template>
  
<script>
import { useBlogStore } from '@/stores/blogs';

export default {
  computed: {
    blogId() {
      return this.$route.params.id;
    },
    blog() {
      return useBlogStore().getBlogById(parseInt(this.blogId, 10));
    },
    formattedDate() {
      if (this.blog) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(this.blog.posted_at);
        return date.toLocaleDateString(undefined, options);
      }
      return '';
    },
  },
  mounted() {
    if (!useBlogStore().getBlogs.length) {
      useBlogStore().fetchBlogs();
    }
  },
};
</script>

  
<style scoped>
.dark-bg {
  background-color: var(--color-background-secondary) !important;
  color: var(--color-text);
}

.image-container {
  max-height: 300px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.dark-bg img {
  filter: brightness(75%);
}
</style>
  