<template>
    <div class="uk-container uk-container-expand uk-margin-top card-scrollable">
        <div class="uk-margin-top uk-card uk-card-default uk-padding-small codedoct-card">
            <h1>Title: "{{ news_detail.title }}"</h1>
            <div>{{news_detail.content}}</div>
            <div class="uk-margin-top uk-text-right">
                <button class="uk-button uk-button-primary" type="button" @click="() => $router.push('/admin/news')">
                    Kembali
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            news_detail: 'news/news_detail'
        })
    },
    async mounted() {
        await this.getNewsDetail(this.$route.params.id);
    },
    methods: {
        ...mapActions({
            getNewsDetail: 'news/getNewsDetail'
        })
    }
};
</script>
