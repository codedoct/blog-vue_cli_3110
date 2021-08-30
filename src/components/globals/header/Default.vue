<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav class="uk-navbar-container header-background" style="position: relative; z-index: 980;" uk-navbar="mode: click">
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <a class="uk-navbar-toggle" href="#toggle-animation" uk-toggle="target: #toggle-animation; animation: uk-animation-slide-left">
              <span uk-navbar-toggle-icon></span>
            </a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li style="color: #3199ee"><b>Codedoct</b></li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a class="uk-navbar-toggle" href="#">
              <span class="uk-margin-small-left">{{name}}</span>
            </a>
            <div class="uk-navbar-dropdown" uk-toggle>
              <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
                <li class="uk-nav-header">Account</li>
                <li><router-link to="#" @click.native="logout"><span class="uk-margin-small-right" uk-icon="icon: sign-out"></span> Log Out</router-link></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { getUserProfile } from '@/utils/auth';

export default {
    data() {
        return {
            name: null
        };
    },
    mounted() {
        this.name = getUserProfile().name;
    },
    methods: {
        ...mapActions({
            logoutUser: 'auth/logout'
        }),
        logout() {
            this.logoutUser();
        }
    }
};
</script>

<style scoped>
.header-background {
  padding: 0 10px;
  background-color: #fff;
  -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}
.uk-navbar-nav > li > a {
  min-height: 60px
}
</style>
