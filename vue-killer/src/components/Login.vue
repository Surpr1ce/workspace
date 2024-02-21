<template>
    <div class="title-box">
        <h3 class="text-white">Prihlásenie</h3>
    </div>
    <div class="login-container bg-dark d-flex flex-column align-items-center">
        <form @submit.prevent="submitForm">
            <div class="form-group mb-3">
                <label for="username" class="col-form-label">Username:</label>
                <div>
                    <input type="text" class="form-control bg-dark text-white" id="username" v-model="username" required>
                </div>
            </div>
            <div class="form-group mb-3">
                <label for="password" class="col-form-label">Password:</label>
                <div>
                    <input type="password" class="form-control bg-dark text-white" id="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="button" class="btn text-orange" @click="register">Registrácia</button>
                <button type="submit" class="btn btn-primary mx-3">Prihlásenie</button>
            </div>
            <div class="text-center">
                <button type="button" class="btn text-gray" @click="forgotpw">Zabudnuté heslo</button>
            </div>
        </form>
    </div>
</template>
    
<script>
import router from '@/router';

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        submitForm() {
            console.log('Submitted');
        },
        register() {
            router.push('/registrovat');
        },
        forgotpw() {
            router.push('/zabudnute-heslo');
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

.login-container {
    padding: 20px;
    color: white;
}

.text-orange {
    color: var(--color-orange);
}

.btn-primary {
    background-color: var(--color-orange) !important;
    border: darkorange !important;
}
</style>
  