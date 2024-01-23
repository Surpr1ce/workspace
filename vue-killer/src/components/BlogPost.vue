<template>
  <div class="card mb-3 bg-dark text-light">
    <div class="row g-0 align-items-center px-md-1">
      <div class="col-md-4">
        <img :src="post.image" alt="Blog Post Image" class="img-fluid rounded">
      </div>
      <div class="col-md-8 d-flex flex-column">
        <div class="card-body">
          <h5 class="card-title text-uppercase">{{ post.title }}</h5>
          <p class="card-text card-descripton">{{ post.preview }}</p>
          <div class="d-flex justify-content-between">
            <p class="card-text">
              <small class="card-text card-date"><i class="fas fa-calendar-alt"></i> {{ post.posted_at }} </small>
              <!--<small class="ms-2 card-comments"><i class="fas fa-comments"></i> {{ post.comments }} komentárov</small>-->
            </p>
            <router-link :to="{ name: 'blogDetail', params: { id: post.id } }">
              <button class="btn btn-secondary text-uppercase">Read more</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.btn-secondary {
  background: var(--color-background-button);
}

.btn-secondary:hover {
  color: var(--color-orange);
  border-color: var(--color-orange);
}

.bg-dark {
  background: var(--color-background-secondary) !important;
}

.card-title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.3em;
  padding-bottom: 25px;
}

.card-descripton {
  padding-bottom: 25px;
  color: var(--color-background-mute);
  font-size: 1em;
}

.card-date,
.card-comments {
  font-weight: 700;
  color: var(--color-background-mute)
}
</style>
