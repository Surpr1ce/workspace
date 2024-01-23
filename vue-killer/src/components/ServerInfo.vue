<template>
    <div class="bg-dark rounded border-orange p-3">
        <div class="row mx-0">
            <div class="col-3 d-flex flex-column align-items-center justify-content-center text-left">
                <div>
                    <i class="fas fa-server text-gray" style="font-size: 60px;"></i>
                </div>
            </div>
            <div class="col-9 d-flex flex-column">
                <div class="row">
                    <div class="col-6 col-sm-6 text-gray small">IP Adresa</div>
                    <div class="col-6 col-sm-6 text-gray small text-end">Online hráči</div>
                </div>
                <div class="row" v-for="server in servers" :key="server.server_id">
                    <div class="col-10 col-sm-10 d-flex align-items-center">
                        <img src="/images/samp.png" class="img-fluid rounded-circle border" width="15px"
                            :class="[isRunning(server)]" height="15px" style="margin-right: 5px;" alt="Server Image" />
                        <a :href="serverLink(server)" class="text-decoration-none text-orange">{{ serverIP(server) }}</a>
                    </div>
                    <div class="col-2 col-sm-2 text-center">
                        <span class="badge bg-orange badge-pill badge-lineh">{{ server.players }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        servers: Array
    },
    computed: {
        serverLink() {
            return (server) => `samp://${server.ip}:${server.port}`;
        },
        serverIP() {
            return (server) => `${server.ip}:${server.port}`
        }
    },
    methods: {
        isRunning(server) {
            return server.is_running ? 'border-success' : 'border-danger';
        },
    },
}
</script>

<style>
.bg-orange {
    background-color: var(--color-orange) !important;
}

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
</style>