<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- Brand -->
      <router-link to="/">
        <img src="/images/logo.png" alt="Brand Logo" class="navbar-brand-image rounded">
      </router-link>

      <!-- Navbar Toggle Button for Small Screens -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse text-center" id="navbarNav">
        <div class="navbar-nav mx-auto">
          <router-link to="/" class="nav-link" :class="{ 'active-link': $route.path === '/' }">Novinky</router-link>
          <router-link to="/admini" class="nav-link"
            :class="{ 'active-link': $route.path === '/admini' }">Admini</router-link>
          <router-link to="/forum" class="nav-link"
            :class="{ 'active-link': $route.path === '/forum' }">Fórum</router-link>
          <router-link to="/banlist" class="nav-link"
            :class="{ 'active-link': $route.path === '/banlist' }">Banlist</router-link>
        </div>

        <!-- Right Section -->
        <div class="navbar-text">
          <router-link to="/" class="nav-link" :class="{ 'active-link': $route.path === '/prihlasit' }"><i
              class="fas fa-sign-in-alt"></i> Prihlasit</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.bg-dark {
  background: var(--color-background-secondary) !important;
}

.navbar {
  padding: 10px 0;
}

.navbar-brand,
.nav-link,
.navbar-text {
  text-transform: uppercase;
  color: var(--color-text);
  font-weight: 400;
}

.nav-link:hover,
.active-link {
  color: orange;
}

.navbar-brand-image {
  max-height: 50px;
}
</style>