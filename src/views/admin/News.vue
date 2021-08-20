<template>
    <div class="uk-container uk-container-expand uk-margin-top card-scrollable">
        <h1>News</h1>

        <div class="uk-margin-top uk-card uk-card-default uk-padding-small codedoct-card">
            <div class="uk-margin-top uk-overflow-auto">
                <table class="uk-table uk-table-striped">
                <thead>
                    <tr>
                        <th class="uk-width-small"><span class="uk-text-bold">Title</span></th>
                        <th class="uk-width-small"><span class="uk-text-bold">Content</span></th>
                        <th class="uk-width-small"><span class="uk-text-bold">Status</span></th>
                        <th class="uk-width-small"><span class="uk-text-bold">Created At</span></th>
                        <th class="uk-width-small"><span class="uk-text-bold">Action</span></th>
                    </tr>
                </thead>
                <template v-if="!is_loading">
                    <tbody v-if="news.docs.length>0">
                        <tr v-for="(news, i) in news.docs" :key="i">
                            <td>{{news.title}}</td>
                            <td>{{news.content}}</td>
                            <td><label-status :status="news.status" /></td>
                            <td>{{getDatetime(news.created_at)}}</td>
                            <td>
                                <button class="uk-button uk-button-primary">Detail</button>
                            </td>
                        </tr>
                    </tbody>
                    <empty-table v-else :colspan="5"/>
                </template>
                <template v-else>
                    <loading-table :colspan="5"/>
                </template>
                </table>
                <pagination
                    :total-data="news.totalDocs"
                    :change-limit="changeLimit"
                    :change-page="changePage"
                    :current-page="meta.page"
                    :current-limit="meta.limit"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Pagination from '@/components/globals/Pagination';
import EmptyTable from '@/components/globals/table/EmptyTable';
import LoadingTable from '@/components/globals/table/LoadingTable';
import LabelStatus from '@/components/globals/LabelStatus';
import { datetimeString } from '@/utils/formater';

export default {
    components: {
        Pagination,
        EmptyTable,
        LoadingTable,
        LabelStatus
    },
    computed : {
        ...mapGetters({
            news: 'news/news'
        })
    },
    data() {
        return {
            is_loading: true,
            meta: {
                page: 1,
                limit: 10
            }
        };
    },
    async mounted() {
        await this.getNews(this.meta);
        this.is_loading = false;
    },
    methods: {
        ...mapActions({
            getNews: 'news/getNews'
        }),
        changeLimit(e) {
            this.meta = {
                ...this.meta,
                page: 1,
                limit: e.target.value
            };
        },
        changePage(value) {
            this.meta = {
                ...this.meta,
                page: value
            };
        },
        getDatetime(date) {
            return datetimeString(date);
        }
    }
};
</script>
