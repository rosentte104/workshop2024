<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
@import "@/assets/css/global.css";
@import url("https://fonts.cdnfonts.com/css/helveticaneue-2");
@import url("https://fonts.cdnfonts.com/css/arial");
@import url("https://fonts.cdnfonts.com/css/poppins");
@import url("https://fonts.cdnfonts.com/css/inter");
@import url("https://fonts.cdnfonts.com/css/lato");
@import url("https://fonts.cdnfonts.com/css/red-hat-display-2");
@import url("https://fonts.cdnfonts.com/css/noto-sans");
</style>
