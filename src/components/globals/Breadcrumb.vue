<template>
    <ul class="uk-breadcrumb">
        <li v-for="(breadcrumb, i) in breadcrumbs" :key="i">
            <a v-if="breadcrumb.link" :href="breadcrumb.link">{{breadcrumb.title}}</a>
            <span v-else>{{breadcrumb.title}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        breadcrumbs: { required: true },
        type: Array,
    }
};
</script>

<style scoped>
.uk-breadcrumb > * > a:hover {
    color: #1e87f0;
}
.uk-breadcrumb > * > span {
    text-transform: capitalize;
}
</style>
