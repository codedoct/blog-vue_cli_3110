<template>
    <div class="uk-container uk-container-expand uk-margin-top card-scrollable">
        <breadcrumb :breadcrumbs="breadcrumb_data" />
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
import Breadcrumb from '@/components/globals/Breadcrumb';

export default {
    components: {
        Breadcrumb
    },
    data() {
        return {
            breadcrumb_data: [
                {link: '/admin/news', title: 'News'},
                {link: null, title: null}
            ]
        };
    },
    computed: {
        ...mapGetters({
            news_detail: 'news/news_detail'
        })
    },
    async mounted() {
        await this.getNewsDetail(this.$route.params.id);
        this.breadcrumb_data[this.breadcrumb_data.length-1].title = this.news_detail.title;
    },
    methods: {
        ...mapActions({
            getNewsDetail: 'news/getNewsDetail'
        })
    }
};
</script>
