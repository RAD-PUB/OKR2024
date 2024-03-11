<template>
  <div class="pagination-area">
    <button v-if="showFirstLastPage" type="button" class="btn-first" :disabled="disabled || currentIndex <= 0" @click="firstCall">
      <font-awesome-icon :icon="firstIcon" />
    </button>
    <button type="button" class="btn-prev" :disabled="disabled || currentIndex <= 0" @click="prevCall">
      <font-awesome-icon :icon="prevIcon" />
    </button>
    <ul class="pagination-list">
      <template v-if="totalVisible && startPoint > 1">
        <li><button type="button" :disabled="disabled" @click="numberClick(1)">1</button></li>
        <li v-if="startPoint > 2" class="ellipsis"><button type="button" disabled>...</button></li>
      </template>
      <template v-for="(item, index) in total" :key="index">
        <li v-if="(index + 1) >= startPoint && (index + 1) <= endPoint" :class="{ on: current === (index + 1) }">
          <button type="button" :disabled="disabled" @click="numberClick(index)">{{ item }}</button>
        </li>
      </template>
      <template v-if="totalVisible && endPoint < total">
        <li v-if="endPoint < total - 1" class="ellipsis"><button type="button" disabled>...</button></li>
        <li><button type="button" :disabled="disabled" @click="numberClick(total - 1)">{{ total }}</button></li>
      </template>
    </ul>
    <button type="button" class="btn-next" :disabled="disabled || currentIndex >= total - 1" @click="nextCall">
      <font-awesome-icon :icon="nextIcon" />
    </button>
    <button v-if="showFirstLastPage" type="button" class="btn-last" :disabled="disabled || currentIndex >= total - 1" @click="lastCall">
      <font-awesome-icon :icon="lastIcon" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'CompPagination',
  props: {
    current: {
      type: Number,
      default: 1,
      require: false
    },
    total: {
      type: Number,
      default: 1,
      require: false
    },
    max: {
      type: Number,
      default: 10,
      require: false
    },
    disabled: {
      type: Boolean,
      default: false,
      require: false,
    },
    firstIcon: {
      type: String,
      default: 'fa-solid fa-angles-left',
      require: false,
    },
    prevIcon: {
      type: String,
      default: 'fa-solid fa-angle-left',
      require: false,
    },
    nextIcon: {
      type: String,
      default: 'fa-solid fa-angle-right',
      require: false,
    },
    lastIcon: {
      type: String,
      default: 'fa-solid fa-angles-right',
      require: false,
    },
    showFirstLastPage: {
      type: Boolean,
      default: false,
      require: false,
    },
    totalVisible: {
      type: Boolean,
      default: false,
      require: false,
    },
  },
  data () {
    return {
      startPoint: null,
      endPoint: null,
      currentIndex: 0
    }
  },
  watch: {
    current: {
      immediate: true, // watch의 처리를 처음 페이지 읽어들일 때도 실행
      handler(val) {
        this.currentIndex = val - 1
      }
    },
    currentIndex: {
      immediate: true,
      handler() {
        this.calcPoint(this.max)
      }
    }
  },
  mounted() {
    this.calcPoint(this.max)
  },
  methods: {
    firstCall() {
      this.numberClick(0)
    },
    lastCall() {
      this.numberClick(this.total - 1)
    },
    prevCall() {
      this.numberClick(this.currentIndex - 1)
    },
    nextCall() {
      this.numberClick(this.currentIndex + 1)
    },
    numberClick(i) {
      this.currentIndex = i
      this.$emit('paging-click', i)
    },
    calcPoint(max) {
      this.startPoint = (this.currentIndex - this.currentIndex % max) + 1
      this.endPoint = this.total <= (this.startPoint) + max - 1 ? this.total : (this.startPoint) + max - 1
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@styles/components/pagination.scss'
</style>
