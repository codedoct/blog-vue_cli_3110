<template>
    <div class="uk-background-cover uk-height-1-1 layout-background uk-text-left">
        <header-default />

        <div class="uk-grid-collapse" uk-grid>
            <sidebar />
            <div class="uk-width-expand@s">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import HeaderDefault from '@/components/globals/header/Default';
import Sidebar from '@/components/globals/sidebar/Default';

export default {
    components: {
        HeaderDefault,
        Sidebar
    }
};
</script>

<style scoped>
.layout-background {
    background-color: #F0F5F3;
}
</style>
