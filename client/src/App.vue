<template>
  <div id="app" class="app">
    <Header></Header>
    <main class="main">
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import CocktailList from "@/components/CocktailList";

export default {
  components: {
    Header,
    Footer,
    Search,
    CocktailList
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('fetchIngredients')
    this.$store.dispatch('fetchUnits')
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Lato';
  src: local('Lato Black'), local('Roboto-Black'),
  url('~@/assets/fonts/Roboto-Black.woff2') format('woff2'),
  url('~@/assets/fonts/Roboto-Black.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto Bold'), local('Roboto-Bold'),
  url('~@/assets/fonts/Roboto-Bold.woff2') format('woff2'),
  url('~@/assets/fonts/Roboto-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto Medium'), local('Roboto-Medium'),
  url('~@/assets/fonts/Roboto-Medium.woff2') format('woff2'),
  url('~@/assets/fonts/Roboto-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto Regular'), local('Roboto-Regular'),
  url('~@/assets/fonts/Roboto-Regular.woff') format('woff2'),
  url('~@/assets/fonts/Roboto-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto Light'), local('Roboto-Light'),
  url('~@/assets/fonts/Roboto-Light.woff2') format('woff2'),
  url('~@/assets/fonts/Roboto-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto Thin'), local('Roboto-Thin'),
  url('~@/assets/fonts/Roboto-Thin.woff2') format('woff2'),
  url('~@/assets/fonts/Roboto-Thin.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

*, *:after, *:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}

html {
  height: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  flex: 1;
  padding: 40px 0;
}

.input {
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border: 1px solid gray;
  font-size: 18px;
  outline: none;

  &:focus {
    outline: 1px solid gray;
  }

  &--textarea {
    height: auto;
    resize: none;
  }
}

.delete-icon {
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 100%;
    height: 1px;
    background: #000;
    display: block;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>
