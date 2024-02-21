<template>
    <div class="title-box">
        <h3 class="text-white">Registrácia</h3>
    </div>
    <div class="register-container bg-dark d-flex flex-column align-items-center">
        <form @submit.prevent="submitForm">
            <div class="form-group mb-3">
                <label for="username" class="col-form-label">Username:</label>
                <div>
                    <input type="text" class="form-control bg-dark text-white" id="username" v-model="username" required>
                </div>
            </div>
            <div class="form-group mb-3">
                <label for="email" class="col-form-label">Email:</label>
                <div>
                    <input type="email" class="form-control bg-dark text-white" id="email" v-model="email" required>
                </div>
            </div>
            <div class="form-group mb-3">
                <label for="password" class="col-form-label">Password:</label>
                <div>
                    <input type="password" class="form-control bg-dark text-white" id="password" v-model="password" required>
                </div>
            </div>
            <div class="form-group mb-3">
                <label for="passwordRepeat" class="col-form-label">Repeat Password:</label>
                <div>
                    <input type="password" class="form-control bg-dark text-white" id="passwordRepeat" v-model="passwordRepeat" required>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Registrovať</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            passwordRepeat: ''
        };
    },
    methods: {
        submitForm() {
            if (this.password !== this.passwordRepeat) {
                console.error('Passwords do not match');
                return;
            }
            console.log('Registration request submitted:', { username: this.username, email: this.email, password: this.password });
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

.register-container {
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