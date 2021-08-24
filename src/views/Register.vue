<template>
    <div class="uk-background-cover uk-flex uk-flex-center uk-height-1-1 layout-background">
        <div class="uk-width-1-4@s uk-margin-large-top">
            <div class=" uk-margin-medium-top uk-card uk-card-default uk-card-body uk-width-1-1@s">
                <h3 class="uk-card-title">Daftar</h3>
                <hr>
                <form @submit.prevent="onSubmit">
                    <div class="uk-margin uk-text-left">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input
                                name="name"
                                class="uk-input"
                                type="text"
                                placeholder="Nama"
                                v-model="name"
                                v-validate="'required'"
                                :class="{'uk-form-danger': errors.has('name')}"
                            >
                        </div>
                        <span class="uk-text-small uk-text-danger" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                    </div>
                    <div class="uk-margin uk-text-left">
                        <div class="uk-inline uk-width-1-1">
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
                            <textarea
                                name="address"
                                rows="3"
                                class="uk-textarea"
                                placeholder="Alamat"
                                v-model="address"
                                v-validate="'required'"
                                :class="{'uk-form-danger': errors.has('address')}"
                            />
                        </div>
                        <span class="uk-text-small uk-text-danger" v-show="errors.has('address')">{{ errors.first('address') }}</span>
                    </div>
                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        <label><input class="uk-radio" type="radio" name="gender" value="male" v-model="gender"> Laki-laki</label>
                        <label><input class="uk-radio" type="radio" name="gender" value="female" v-model="gender"> Perempuan</label>
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
                    <button v-if="!is_loading" class="uk-button uk-button-primary uk-width-1-1" type="submit" :disabled="is_loading">Register</button>
                    <button v-else class="uk-button uk-button-primary uk-width-1-1" type="button" disabled><div uk-spinner></div></button>
                </form>
            </div>
            <p class="uk-text-muted uk-text-small">Punya akun? silahkan <router-link :to="'/login'">Login!</router-link></p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            is_loading: false,
            name: '',
            email: '',
            password: '',
            address: '',
            gender: 'male'
        };
    },
    methods: {
        ...mapActions({
            registerUser: 'auth/register'
        }),
        onSubmit() {
            this.$validator.validateAll().then(async (success) => {
                if (success) {
                    if (this.$validator.errors.any()) return;
                    this.register();
                }
            });
        },
        async register() {
            this.is_loading = true;
            try {
                await this.registerUser({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    address: this.address,
                    gender: this.gender
                });
                this.$router.push("/login");
            } catch (error) {
                this.is_loading = false;
            }
        }
    }
};
</script>
