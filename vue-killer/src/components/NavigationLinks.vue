<template>
    <div class="bg-dark rounded border-orange p-3">
        <div class="row mx-0 text-center">
            <div class="col-3 border-left d-flex align-items-center justify-content-center">
                <i class="fas fa-list-ol fa-4x text-gray"></i>
            </div>
            <div class="col-9 d-flex flex-column justify-content-center">
                <a href="/" class="text-orange text-decoration-none">
                    <i class="fas fa-globe me-2"></i> Fórum
                </a>
                <a href="/" class="text-orange text-decoration-none">
                    <i class="fas fa-layer-group me-2"></i> &nbsp;&nbsp;Crew
                </a>
                <a href="/" class="text-orange text-decoration-none">
                    <i class="fas fa-server me-2"></i> &nbsp;&nbsp;Hráči
                </a>
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

.bg-dark-custom {
    background: var(--color-background);
}
</style>
  