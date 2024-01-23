<template>
    <div class="container bg-dark p-4 rounded">
        <h1 class="text-light mb-4">Admin Team</h1>
        <AdminProfileItem v-for="admin in admins" :key="admin.id" :admin="admin" />
    </div>
</template>

<script>
import { useAdminStore } from '@/stores/admins';
import AdminProfileItem from './AdminProfileItem.vue';

export default {
    components: { AdminProfileItem },
    data() {
        return {
            adminStore: useAdminStore()
        }
    },
    computed: {
        admins() {
            return this.adminStore.getAdmins
        }
    },
    mounted() {
        this.adminStore.fetchAdmins();
    },
}
</script>

<style scoped>
.bg-dark {
    background-color: var(--color-background-secondary) !important;
}
</style>