<template>
  <div class="row text-light align-items-center">
    <div class="col">
      <div class="row align-items-center">
        <div class="col"><img :src="admin.avatar" alt="user avatar" :style="{ width: '75px', height: '75px' }" class="rounded"></div>
        <div class="col">
          <h5 class="card-title">Username</h5>
          <p class="card-text">{{ admin.username }}</p>
        </div>
      </div>
    </div>
    <div class="col">
      <h5 class="card-title">Role</h5>
      <p class="card-text">{{ admin.role }}</p>
    </div>
    <div class="col">
      <h5 class="card-title">Discord</h5>
      <p class="card-text">{{ admin.discord }}</p>
    </div>
  </div>
  <hr>
</template>
  
<script>
export default {
  props: {
    admin: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-text,
hr {
  color: var(--color-background-mute);
}
</style>
  