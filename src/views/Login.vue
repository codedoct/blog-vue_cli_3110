<template>
    <div class="uk-background-cover uk-flex uk-flex-center uk-height-1-1 layout-background">
        <div class="uk-width-1-4@s uk-margin-large-top">
            <div class=" uk-margin-medium-top uk-card uk-card-default uk-card-body uk-width-1-1@s">
                <h3 class="uk-card-title">Login</h3>
                <hr>
                <form @submit.prevent="onSubmit">
                    <div class="uk-margin uk-text-left">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input
                                name="email"
                                class="uk-input"
                                type="text"
                                placeholder="Email"
                                v-model="email"
                                v-validate="'required|email'"
                                :class="{'uk-form-danger': errors.has('email')}"
                            >
                        </div>
                        <span class="uk-text-small uk-text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                    <div class="uk-margin uk-text-left">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: lock"></span>
                            <input
                                name="password"
                                class="uk-input"
                                type="password"
                                placeholder="Password"
                                autocomplete="new-password"
                                v-model="password"
                                v-validate="'required|min:8'"
                                :class="{'uk-form-danger': errors.has('password')}"
                            >
                        </div>
                        <span class="uk-text-small uk-text-danger" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                    </div>
                    <button v-if="!is_loading" class="uk-button uk-button-primary uk-width-1-1" type="submit" :disabled="is_loading">Login</button>
                    <button v-else class="uk-button uk-button-primary uk-width-1-1" type="button" disabled><div uk-spinner></div></button>
                </form>
            </div>
            <p class="uk-text-muted uk-text-small">Belum punya akun? silahkan <router-link :to="'/register'">Register!</router-link></p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            is_loading: false,
            email: '',
            password: ''
        };
    },
    methods: {
        ...mapActions({
            loginUser: 'auth/login'
        }),
        onSubmit() {
            this.$validator.validateAll().then(async (success) => {
                if (success) {
                    if (this.$validator.errors.any()) return;
                    this.login();
                }
            });
        },
        async login() {
            this.is_loading = true;
            try {
                await this.loginUser({
                    email: this.email,
                    password: this.password
                });
                setTimeout(() => {
                    this.$router.push("/admin");
                }, 1000);
            } catch (error) {
                this.is_loading = false;
            }
        }
    }
};
</script>
