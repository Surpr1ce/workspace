<template>
    <Welcome/>
    <div class="container mb-4 mt-4">
        <div class="row">
            <div class="col-md-8">
                <Register/>
            </div>
            <div class="col-md-4">

            </div>
        </div>
    </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import Register from '@/components/Register.vue'
export default {
    components: {
        Welcome,
        Register
    }
}
</script>