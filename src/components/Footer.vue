<template>
  <footer>
    <img v-lazy="imgFooter" alt="Footer" />
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      imgFooter: require("../assets/images/footer.png"),
    };
  },
};
</script>
