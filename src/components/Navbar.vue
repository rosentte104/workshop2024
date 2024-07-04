<template>
  <header>
    <img v-lazy="imgLogo" alt="Logo" />
    <div class="menu">
      <router-link to="/" class="menu-item" exact-active-class="active-link"
        >accueil</router-link
      >
      <router-link
        to="/about"
        class="menu-item"
        exact-active-class="active-link"
        >à propos</router-link
      >
      <router-link
        to="/exposition"
        class="menu-item"
        exact-active-class="active-link"
        >exposition</router-link
      >
      <router-link
        to="/events"
        class="menu-item"
        exact-active-class="active-link"
        >programme</router-link
      >
      <router-link
        to="/booking"
        class="menu-item"
        exact-active-class="active-link"
        >réservation</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      imgLogo: require("../assets/images/logo.png"),
    };
  },
};
</script>
