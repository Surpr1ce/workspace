<template>
  <div class="card text-white bg-dark py-3 mb-3">
    <div class="row g-0">
      <!-- Title and Date -->
      <div class="col-12 mb-2">
        <div class="d-flex justify-content-around align-items-center">
          <p class="card-title">{{ post.title }}</p>
          <p class="card-text card-date">{{ post.posted_at }}</p>
        </div>
      </div>

      <!-- User Info and Button -->
      <div class="col-12 d-flex align-items-center justify-content-around">
        <div class="d-flex align-items-center">
          <img :src="post.avatar" alt="User Avatar" class="rounded-circle avatar me-2">
          <div>
            <p class="card-text mb-0"><strong>{{ post.username }}</strong></p>
            <p class="card-text card-position">{{ post.role }}</p>
          </div>
        </div>
        <router-link :to="{name: 'blogDetail', params: { id: post.id }}" class="btn btn-secondary d-flex align-items-center">
          <i class="fas fa-arrow-right me-1"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
  
<style scoped>

.card-title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
}

.card-position {
  color: var(--color-background-mute);
  font-style: italic;
}

.card-date {
  color: var(--color-background-mute);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border: 2px solid var(--color-background-mute);
}

.bg-dark {
  background-color: var(--color-background-secondary) !important;
}

.btn-secondary {
  background: var(--color-background-button);
  max-width: 70px;
  padding: 15px;
}

.btn-secondary:hover {
  color: var(--color-orange);
  border-color: var(--color-orange);
}
</style>
  