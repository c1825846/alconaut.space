<template>
  <div class="section__add-cocktail">
    <div class="container">
      <form class="add-cocktail">
        <div class="add-cocktail__input-wrapper">
          <label class="add-cocktail__input-label">Название</label>
          <input
              type="text"
              class="add-cocktail__input input"
              placeholder="Название"
              v-model="title"
          >
        </div>
        <div class="add-cocktail__input-wrapper" v-for="(ingredient, index) in selectedIngredients">
          <div class="selected-ingredient">
            <div class="selected-ingredient__title">
              {{ ingredient.ingredient.title }}
            </div>
            <div class="selected-ingredient__quantity">
              <input
                  type="number"
                  class="selected-ingredient__quantity-input"
                  min="0"
                  max="1000"
                  v-model="ingredient.quantity"
              >
            </div>
            <div class="selected-ingredient__unit">
              <select name="" id="" v-model="ingredient.unit">
                <option v-for="unit in allUnits" :value="unit._id">
                  {{ unit.title }}
                </option>
              </select>
            </div>
            <div class="selected-ingredient__delete delete-icon" @click="deleteIngredient(index)"/>
          </div>
        </div>
        <div class="add-cocktail__input-wrapper">
          <label class="add-cocktail__input-label">Ингредиенты</label>
          <SearchInput
              :list-to-search="allIngredients"
              @select="addIngredient($event)"
              placeholder="Начните вводить ингредиент"
          />
        </div>
        <div class="add-cocktail__input-wrapper">
          <label class="add-cocktail__input-label">Рецепт</label>
          <textarea
              name=""
              cols="30"
              rows="10"
              class="add-cocktail__input input input--textarea"
              placeholder="Опишите процесс приготовления напитка"
              v-model="recipe"
          ></textarea>
        </div>
        <div class="add-cocktail__input-wrapper">
          <input type="file" @change="handleFileUpload($event)">
        </div>
        <div class="add-cocktail__input-wrapper">
          <button class="add-cocktail__button" type="submit" @click.prevent="submitData">Добавить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";

export default {
  components: {
    SearchInput,
  },
  name: "AddCocktail",
  data() {
    return {
      title: '',
      selectedIngredients: [],
      recipe: '',
      image: null,
    }
  },
  computed: {
    allIngredients() {
      return this.$store.getters.allIngredients.filter(ingredient => {
        return !this.selectedIngredients.map(ingredient => ingredient.ingredient).includes(ingredient)
      })
    },
    allUnits() {
      return this.$store.getters.units
    }
  },
  methods: {
    addIngredient(event) {
      this.$set(this.selectedIngredients, this.selectedIngredients.length, {
        ingredient: event,
      })
      this.$set(this.selectedIngredients[this.selectedIngredients.length - 1], 'quantity', 0)
      this.$set(this.selectedIngredients[this.selectedIngredients.length - 1], 'unit', '')
    },
    deleteIngredient(index) {
      this.selectedIngredients.splice(index, 1)
    },
    handleFileUpload(event) {
      this.image = event.target.files[0]
    },
    async submitData() {
      let formData = new FormData()
      formData.append('title', this.title)
      formData.append('ingredients', JSON.stringify(this.selectedIngredients.map(ingredient => {
        return {
          ingredient: ingredient.ingredient._id,
          quantity: ingredient.quantity,
          unit: ingredient.unit
        }
      })))
      formData.append('recipe', this.recipe)
      formData.append('image', this.image)
      let response = await fetch('/api/cocktails', {
        method: 'POST',
        body: formData,
      })
      let result = await response.json()
      console.log(result)
      this.clearForm()
    },
    clearForm() {
      this.title = ''
      this.selectedIngredients = []
      this.recipe = ''
      this.image = null
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.add-cocktail {
  &__input {


    &-wrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }

    &-label {
      margin-bottom: 4px;
      color: gray;
    }
  }

  &__button {
    height: 40px;
    padding: 10px 20px;
    border: 1px solid gray;
    font-size: 16px;
    outline: none;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: .3s ease;
    align-self: flex-end;

    &:hover {
      background: teal;
      color: #ffffff;
    }
  }
}

.selected-ingredient {
  display: flex;
  align-items: center;
  gap: 30px;

  &__title {
  }

  &__quantity {
    max-width: 120px;
  }

  &__unit {
  }

  &__delete {
  }
}
</style>