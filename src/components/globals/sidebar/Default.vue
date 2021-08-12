<template>
    <div id="toggle-animation" :class="{'width-large': isShow, 'width-small': !isShow, 'card-sidebar': true}">
        <div class="sidebar uk-card uk-card-default uk-card-body uk-height-1-1">
            <h2 v-if="isShow" class="mobile-hide">Codedoct</h2>
            <ul v-if="isShow" id="sidebar" class="uk-nav-default uk-nav-parent-icon" uk-nav>
                <li v-bind:key="items.name" v-for="items in filterSidebar" :class="getSidebarClass(items.to)">
                    <router-link to="" @click.native="goTo(items.to)">
                        <div class="uk-grid uk-grid-collapse">
                            <div class="uk-width-1-5@m uk-width-1-1@xs">
                                <span :uk-icon="`icon: ${items.icon}; ratio: 1.2`"></span>
                            </div>
                            <div class="uk-width-4-5@m mobile-hide">
                                {{items.name}}
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        
            <ul v-else class="uk-nav-default uk-nav-parent-icon" uk-nav>
                <li v-bind:key="items.name" v-for="items in filterSidebar" :class="getSidebarClass(items.to)">
                    <router-link to="" @click.native="goTo(items.to)" class="mini"><span :uk-icon="`icon: ${items.icon}; ratio: 1.2`"></span></router-link>
                </li>
            </ul>
        </div>
        
        <div class="detail-sidebar uk-text-right mobile-hide">
            <a v-if="isShow" @click="showDetailSidebar()"><span uk-icon="icon: chevron-left; ratio: 1.2"></span></a>
            <a v-else @click="showDetailSidebar()"><span uk-icon="icon: chevron-right; ratio: 1.2"></span></a>
        </div>
    </div>
</template>

<script>
import { PREFIX_IMAGE } from '@/utils/constant';
import sidebarJson from "./sidebar.json";

export default {
    data() {
        return {
            isShow: true,
            images: PREFIX_IMAGE,
            showProduction: process.env.VUE_APP_ENV == 'production',
            sidebar: sidebarJson
        };
    },
    methods: {
        showDetailSidebar() {
            this.isShow = !this.isShow;
        },
        getSidebarClass(path) {
            return{
                'active': this.$route.fullPath === path,
                'inactive': this.$route.fullPath !== path
            };
        },
        goTo(path) {
            switch (path) {
            case '/admin/news':
                this.$router.push(path);
                break;
            default:
                this.$router.push('/admin/news');
                break;
            }
        }
    },
    computed: {
        filterSidebar: function(){
            const sider = this.sidebar.filter(item => {
                if(item.role.includes('super_admin')){
                    if(this.showProduction){
                        if(item.showProduction){
                            return item;
                        }
                    }else{
                        return item;
                    }
                }
            });
            return sider;
        }
    }
};
</script>

<style scoped>
.width-large {
    width: 20.5%;
}
.width-small {
    width: 7%;
}
#toggle-animation {
    transition: width 500ms;
}
.card-sidebar {
    height: calc(100vh - 110px);
}
.detail-sidebar {
    padding-right: 10%;
    background-color: #ffffff;
    height: 50px;
    line-height: 50px;
}
.detail-sidebar a {
    color: #6D7278;
}
.sidebar {
    overflow: auto;
    background-color: #ffffff;
}
li {
    padding: 10px 0;
    border-top: 1px solid #f1f2f3;
}
li:last-child {
    border-bottom: 1px solid #f1f2f3;
}
.uk-nav-header {
    color: #fff;
}
.active{
    background-color: #ffffff;
    color: #6D7278;
    font-weight: bold;
    border-left: 5px solid #3199ee;
}
.active > a{
    color: #6D7278 !important;
}
.mini {
    padding-left: 20px !important;
    padding-right: 20px !important;
    width: 20px;
    margin: auto;
}

@media screen and (min-width: 601px) and (max-width: 900px) {
    .card-sidebar {
        height: calc(100vh - 60px);
    }
    .mobile-hide {
        display: none;
    }
    .uk-card-default {
        box-shadow: none;
    }
    .width-large {
        width: 10%;
    }
    .uk-card-body {
        padding: 0 30px;
    }
    .uk-nav-default > li > a {
        padding: 5px 0 5px 35%;
    }
}
@media screen and (max-width: 600px) {
    .card-sidebar {
        height: calc(100vh - 60px);
    }
    .mobile-hide {
        display: none;
    }
    .uk-card-default {
        box-shadow: none;
    }
    .width-large {
        width: 10%;
    }
    .uk-card-body {
        padding: 0 30px;
    }
    .uk-nav-default > li > a {
        padding: 5px 20px;
    }
}
</style>
