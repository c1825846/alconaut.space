<template>
  <section class="section__cocktails">
    <div class="container">
      <div class="cocktails">
        <CocktailCard
            v-for="cocktail in cocktailList"
            :title="cocktail.title"
            :image-path="cocktail.image"
            :ingredients="cocktail.ingredients"
            :link="cocktail._id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CocktailCard from "@/components/CocktailCard";

export default {
  components: {
    CocktailCard
  },
  name: "CocktailList",
  props: {
    cocktailList: Array,
  },
  data() {
    return {}
  },
  computed: {
    ingredients() {
      return
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &__cocktails {
  }
}

.cocktails {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  gap: 20px 0;
}
</style>