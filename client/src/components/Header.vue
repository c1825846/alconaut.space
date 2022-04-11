<template>
  <section class="section__header">
    <div class="container">
      <header class="header">
        <router-link to="/" class="header__logo">
          Alconaout
        </router-link>
        <div class="header__menu">

        </div>
      </header>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
.section {
  &__header {
    background: teal;
    padding: 20px 0;
  }
}

.header {
  &__logo {
    font-size: 36px;
    color: #fff;
  }
}
</style>