<template>
  <router-link :to="`cocktail/${link}`" class="cocktail-card">
    <div class="cocktail-card__image">
      <img :src="imagePath" alt="">
    </div>
    <div class="cocktail-card__title">
      {{ title }}
    </div>
    <div class="cocktail-card__ingredients">
      <div class="cocktail-card__ingredient" v-for="ingredient in ingredientsTitles">
        {{ ingredient }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props:{
    title: String,
    imagePath: String,
    ingredients: Array,
    link: String
  },
  name: "CocktailCard",
  data() {
    return {
      ingredientsTitles: []
    }
  },
  async created() {
    this.ingredients.forEach(async ingredient => {
      let response = await fetch(`/api/ingredients/${ingredient.ingredient}`)
      let result = await response.json()
      this.ingredientsTitles.push(result.title)
    })
  }
}
</script>

<style lang="scss" scoped>
.cocktail-card {
  padding: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 13px 0px rgba(193, 193, 193, 0.6);
  }

  &__image {
    height: 260px;
    margin-bottom: 16px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin-bottom: 8px;
  }

  &__ingredients {
  }

  &__ingredient {
    margin-bottom: 4px;
    font-weight: 300;
  }
}
</style>