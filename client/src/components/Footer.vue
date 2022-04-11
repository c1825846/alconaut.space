<template>
  <footer class="section__footer">
    <div class="container">
      <div class="footer">
        © 2022 Alconaut <br>
        Использованы изображения с сайта <a href="https://www.edim.tv/">Едим ТВ</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.section {
  &__footer {
    background: teal;
    padding: 20px 0;
  }
}

.footer {
  color: #ffffff;
  font-weight: 300;
  line-height: 1.5;

  a:hover {
    text-decoration: underline;
  }
}
</style>