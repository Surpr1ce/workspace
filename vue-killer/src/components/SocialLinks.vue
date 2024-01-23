<template>
    <div class="bg-dark rounded border-orange p-3">
        <div class="row mx-0 text-center">
            <div class="col-3 mh d-flex flex-column justify-content-center">
                <i class="fas fa-ellipsis-h fa-3x text-gray"></i>
            </div>
            <div class="col-9 mh d-flex flex-column justify-content-center">
                <div class="socials">
                    <a href="" target="_blank" class="text-white text-decoration-none">
                        <i class="fab fa-tiktok fa-lg"></i>
                    </a>
                    <a href="/" target="_blank" class="text-white text-decoration-none">
                        <i class="fab fa-instagram fa-lg"></i>
                    </a>
                    <a href="/" target="_blank" class="text-white text-decoration-none">
                        <i class="fab fa-facebook fa-lg"></i>
                    </a>
                    <a href="/" target="_blank" class="text-white text-decoration-none">
                        <i class="fab fa-youtube fa-lg"></i>
                    </a>
                    <a href="/" target="_blank" class="text-white text-decoration-none">
                        <i class="fab fa-discord fa-lg"></i>
                    </a>
                    <a href="/" target="_blank" class="text-white text-decoration-none">
                        <i class="fab fa-steam fa-lg"></i>
                    </a>
                    <a href="/" target="_blank" class="text-white text-decoration-none">
                        <i class="fas fa-star fa-lg"></i>
                    </a>
                </div>
                <a href="/" class="mt-2 btn btn-success text-decoration-none">Pripojit sa na server</a>
            </div>
        </div>
    </div>
</template>
  
<style>
.text-orange {
    color: var(--color-orange) !important;
}

.text-gray {
    color: var(--color-background-mute) !important;
}

.border-orange {
    border-left: 2px solid var(--color-orange) !important;
}

.text-decoration-none {
    text-decoration: none !important;
}

.bg-dark {
    background: var(--color-background-secondary) !important;
}

.socials i {
    margin-right: 10px;
}

/* Hover effect for icons */
.socials a:hover i {
    color: var(--color-orange) !important;
}
</style>
