<template>
    <div class="copyright-container">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <p class="footer-text">
                        Copyright &copy; 2023 <a href="https://github.com/Surpr1ce" class="footer-link">Brand.com</a>
                    </p>
                </div>
                <div class="col text-center">
                    <p class="footer-text">
                        Website created <a href="https://github.com/Surpr1ce" target="_blank" rel="noopener noreferrer"
                            class="footer-link">Surpr1ce</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

  
<style scoped>
.footer-text {
    color: var(--color-background-mute);
    font-weight: 500;
    font-size: 15px;
}

.footer-link {
    color: var(--color-text);
    text-decoration: none;
}

.footer-link:hover {
    text-decoration: underline;
}

.copyright-container {
    padding: 10px;
    background-color: var(--color-background);
}
</style>
  