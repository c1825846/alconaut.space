<template>
  <div class="cocktail-view">
    <section class="section__detail">
      <div class="container">
        <div class="detail">
          <div class="detail__image">
            <img :src="imagePath" alt="">
          </div>
          <div class="detail__body">
            <div class="detail__title">
              {{ title }}
            </div>
            <div class="detail__ingredients">
              <div class="detail__ingredient" v-for="ingredient in ingredients">
                <div class="detail__ingredient-label">
                  {{ $store.getters.ingredient(ingredient.ingredient).title }}
                </div>
                <div class="detail__ingredient-value">
                  {{ ingredient.quantity === 0 ? '' : ingredient.quantity}}
                  {{ $store.getters.unit(ingredient.unit).title }}
                </div>
              </div>
            </div>
            <div class="detail__recipe">
              <ul>
                <li v-for="line in recipe.split('\r')">
                  {{ line }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Cocktail.vue",
  data(){
    return {
      title: '',
      ingredients: [],
      recipe: '',
      imagePath: '',
    }
  },
  computed: {
    cocktailId() {
      return this.$route.params.id
    }
  },
  async created() {
    let response = await fetch(`/api/cocktails/${this.cocktailId}`)
    let result = await response.json()
    this.title = result.title
    this.ingredients = result.ingredients
    this.recipe = result.recipe
    this.imagePath = result.image
  }
}
</script>

<style lang="scss" scoped>
.section {
  &__detail {
  }
}

.detail {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;

  &__image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__body {
  }

  &__title {
    font-size: 46px;
    margin-bottom: 20px;
  }

  &__ingredients {
    margin-bottom: 16px;
  }

  &__ingredient {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid gray;

    &-label {
    }

    &-value {
    }
  }

  &__recipe {
    line-height: 1.5;
  }
}
</style>