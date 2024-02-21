<template>
    <div class="title-box">
        <h3 class="text-white">Zabudnuté heslo</h3>
    </div>
    <div class="forgotpw-container bg-dark d-flex justify-content-center">
        <form @submit.prevent="submitForm">
            <div class="form-group mb-3">
                <label for="email" class="col-form-label">Email:</label>
                <div>
                    <input type="email" class="form-control bg-dark text-white" id="email" v-model="email" required>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Obnoviť heslo</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        };
    },
    methods: {
        submitForm() {
            console.log('Forgot password request submitted for email:', this.email);
        }
    }
};
</script>

<style>
.title-box {
    background-color: var(--color-orange);
    padding: 5px;
    text-align: center;
}

.forgotpw-container {
    padding: 20px;
    color: white;
}

.text-orange {
    color: var(--color-orange);
}

.btn-primary {
    background-color: var(--color-orange) !important;
}
</style>