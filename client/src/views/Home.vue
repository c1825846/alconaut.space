<template>
  <div>
    <Search
      @changeIngredients="changeIngredients($event)"
    />
    <CocktailList
        :cocktail-list="cocktailList"
    />
  </div>
</template>

<script>
import Search from "@/components/Search"
import CocktailList from "@/components/CocktailList"


export default {
  components: {
    Search,
    CocktailList,
  },
  name: 'Home',
  data() {
    return{
      cocktailList: [],
      ingredientList: [],
    }
  },
  methods: {
    changeIngredients(event) {
      this.ingredientList = event.map(ingredient => ingredient._id)
    }
  },
  async mounted() {
    let response = await fetch('/api/cocktails')
    let result = await response.json()
    this.cocktailList = result
  },
  watch: {
    async ingredientList(newValue, oldValue) {
      if(newValue){
        let response = await fetch('/api/find', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ingredients: this.ingredientList})
        })
        let result = await response.json()
        this.cocktailList = result
        return
      }

    }
  }
}
</script>
