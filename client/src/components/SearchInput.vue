<template>
  <div class="search">
    <div class="search__input-wrapper">
      <input
          type="text"
          @click="isResultListOpened = true"
          v-model="searchQuery"
          class="search__input input"
          :placeholder="placeholder"
          @focus="isResultListOpened = true"
      >
      <div class="search__results" v-if="isResultListOpened">
        <div
            class="search__result"
            v-if="listToShow.length < 1"
        >
          Нет подходящих ингредиентов
        </div>
        <div
            v-else
            class="search__result"
            v-for="(item, index) in listToShow"
            @click="handleSelect(index)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    listToSearch: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
    }
  },
  computed: {
    listToShow() {
      return this.listToSearch.filter(item => {
        return item.title.toLowerCase().includes(this.searchQuery.toLowerCase().trim())
      })
    }
  },
  data() {
    return {
      isResultListOpened: false,
      searchQuery: '',
    }
  },
  methods: {
    handleSelect(index) {
      this.$emit('select', this.listToShow[index])
      this.isResultListOpened = false
      this.searchQuery = ''
    },
    handleClickOutside(event) {
      if (this.isResultListOpened && !(event.target.classList.contains('search__input') || event.target.classList.contains('search__results'))) {
        this.isResultListOpened = false
      }
    }
  },
  created() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style lang="scss" scoped>
.search {
  &__input {
    &-wrapper {
      position: relative;
    }
  }

  &__results {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 2;
    border: 1px solid gray;
    border-top: none;
    max-height: 60vh;
    overflow: auto;
  }

  &__input:focus + &__results {
    outline: 1px solid gray;
  }

  &__result {
    height: 40px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background: #f2f2f2;
    }
  }
}
</style>