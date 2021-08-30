<template>
    <div class="uk-container uk-container-expand uk-margin-top card-scrollable">
        <h1>Profile</h1>

        <div class="uk-margin-top uk-card uk-card-default uk-padding-small codedoct-card">
            <div class="uk-overflow-auto">
                Nama: {{profile.name}}
                <br />
                Email: {{profile.email}}
                <br />
                Alamat: {{profile.address}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            is_loading: true,
            meta: {
                page: 1,
                limit: 10
            }
        };
    },
    computed : {
        ...mapGetters({
            profile: 'user/profile'
        })
    },
    async mounted() {
        await this.getProfile();
        this.is_loading = false;
    },
    methods: {
        ...mapActions({
            getProfile: 'user/userProfile'
        })
    }
};
</script>
