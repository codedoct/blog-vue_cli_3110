<template>
  <div class="pagination">
    <span class="row-per-page">Rows per page:</span>
    <div class="limit-page">
      <select class="uk-select" id="form-horizontal-select" v-model="limitPage" @change="changeLimit">
        <option
          v-for="page in limitList"
          :key="page"
          :value="page"
        >
          {{page}}
        </option>
      </select>
    </div>
    <span class="info">{{firstInPage}}-{{lastInPage}} of {{totalData}}</span>
    <div class="action">
      <button class="uk-button uk-button-text" @click="firstPage" :disabled="totalData === 0 || page === 1">
        <span uk-icon="icon: chevron-double-left"></span>
      </button>
      <button class="uk-button uk-button-text" @click="toPage(-1)" :disabled="totalData === 0 || page === 1">
        <span uk-icon="icon: chevron-left"></span>
      </button>
      <button class="uk-button uk-button-text" @click="toPage(1)" :disabled="totalData === 0 || (page === Math.ceil(this.totalData / this.limitPage))">
        <span uk-icon="icon: chevron-right"></span>
      </button>
      <button class="uk-button uk-button-text" @click="lastPage" :disabled="totalData === 0 || (page === Math.ceil(this.totalData / this.limitPage))">
        <span uk-icon="icon: chevron-double-right"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        totalData: {
            required: true,
            type: Number,
            default: 0
        },
        changeLimit: {
            required: true,
            type: Function
        },
        changePage: {
            required: true,
            type: Function
        },
        currentPage: {
            required: false,
            default: 1,
            type: Number
        },
        currentLimit: {
            required: false,
            default: 10
        }
    },
    data() {
        return {
            limitPage: 10,
            limitList: [10, 20, 50, 100],
            page: 1
        };
    },
    computed: {
        firstInPage() {
            return this.page * this.limitPage - (this.limitPage-1);
        },
        lastInPage() {
            return this.totalData > this.page * this.limitPage ? this.page * this.limitPage : this.totalData;
        }
    },
    watch: {
        currentPage() {
            this.page = this.currentPage;
        },
        currentLimit() {
            this.limitPage = parseInt(this.currentLimit);
        }
    },
    methods: {
        toPage(val) {
            this.page += val;
            this.changePage(this.page);
        },
        firstPage() {
            this.page = 1;
            this.changePage(this.page);
        },
        lastPage() {
            this.page = Math.ceil(this.totalData / this.limitPage);
            this.changePage(this.page);
        }
    }
};
</script>

<style scoped>
.pagination {
  display: flex;
  border-top: 1px solid #e5e5e5;
  line-height: 54px;
  height: 54px;
  padding: 0 20px;
  font-size: 13px;
}
.row-per-page {
  flex: 1;
  text-align: right
}
.limit-page {
  margin-left: 20px;
}
.uk-select {
  border: none;
  height: 100%;
  line-height: normal;
  cursor: pointer;
}
.info {
  margin-left: 30px;
}
.action {
  margin-left: 20px;
  margin-top: -2px;
}
.uk-button {
  margin-left: 10px;
}
@media screen and (max-width: 488px) {
  .pagination {
    padding: 0 5px;
  }
  .info {
    margin-left: 10px;
  }
}
</style>
