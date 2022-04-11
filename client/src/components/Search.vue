<template>
  <section class="section__search">
    <div class="container">
      <div class="search">
        <div class="search__input-wrapper">
          <SearchInput
            :list-to-search="allIngredients"
            @select="addIngredient($event)"
            placeholder="Начните вводить ингредиент"
          />
        </div>
        <div class="search__ingredients">
          <div class="search__ingredient" v-for="(ingredient, index) in selectedIngredients">
            <div class="search__ingredient-text">{{ ingredient.title }}</div>
            <div
                class="search__ingredient-delete delete-icon"
                @click="deleteIngredient(index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchInput from "@/components/SearchInput";
export default {
  components: {
    SearchInput
  },
  name: "Search",
  data() {
    return {
      selectedIngredients: [],
    }
  },
  computed: {
    allIngredients(){
      return this.$store.getters.allIngredients.filter(ingredient => {
        return !this.selectedIngredients.includes(ingredient)
      })
    }
  },
  methods: {
    addIngredient(event) {
      this.selectedIngredients.push(event)
    },
    deleteIngredient(index) {
      this.selectedIngredients.splice(index, 1)
    }
  },
  watch: {
    selectedIngredients() {
      this.$emit('changeIngredients', this.selectedIngredients)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &__search {
    padding: 0 0 20px;
  }
}
.search {
  &__input {
    &-wrapper {
      margin-bottom: 20px;
      position: relative;
    }
  }

  &__ingredients {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__ingredient {
    background: #f2f2f2;
    display: inline-flex;
    padding: 4px 8px;

    &-text {
      margin-right: 10px;
    }

    &-delete {

    }
  }
}
</style>