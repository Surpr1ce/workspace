<template>
    <footer>
        <div class="footer-container bg-dark">
            <div class="container">
                <div class="row">
                    <!-- First Column -->
                    <div class="col-md-3 text-center">
                        <img src="/images/logo.png" alt="Grand Logo" class="img-fluid mb-3 brand-logo rounded">
                    </div>

                    <!-- Second Column -->
                    <div class="col-md-3 d-flex flex-column justify-content-center text-left">
                        <router-link to="/" class="footer-link">Podporte nás</router-link>
                        <router-link to="/" class="footer-link">Kontakt</router-link>
                        <router-link to="/" class="footer-link">Pravidlá a podmienky</router-link>
                    </div>

                    <!-- Third Column -->
                    <div class="col-md-3 d-flex flex-column justify-content-center text-left">
                        <router-link to="/" class="footer-link">O nás</router-link>
                        <router-link to="/" class="footer-link">Premium</router-link>
                        <router-link to="/" class="footer-link">História</router-link>
                    </div>

                    <!-- Fourth Column -->
                    <div class="col-md-3 text-center mt-3 d-flex flex-column justify-content-center">
                        <h6 class="social-heading">Social Sites</h6>
                        <p class="social-links">
                            <a href="https://www.youtube.com/" target="_blank" class="footer-icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" class="footer-icon">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Copyright />
    </footer>
</template>

<script>
import Copyright from '@/components/Copyright.vue'

export default {
    components: {
        Copyright
    }
}
</script>
  
<style scoped>
.bg-dark {
    background: var(--color-background-secondary) !important;
}

.footer-container {
    padding: 50px 0;
}

.brand-name {
    font-size: 1.2em;
    font-weight: bold;
}

.brand-logo {
    max-height: 150px;
}

.footer-link {
    color: var(--color-text);
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 5px;
    font-weight: 400;
}

.footer-link:hover,
.footer-icon:hover {
    color: var(--color-orange);
}

.social-links {
    display: flex;
    justify-content: center;
}

.social-heading {
    text-transform: uppercase;
    color: var(--color-text);
}

.footer-icon {
    color: var(--color-text);
    font-size: 3em;
    padding: 0 15px;
}

@media (max-width: 992px) {
    .text-left {
        text-align: center !important;
    }
}
</style>