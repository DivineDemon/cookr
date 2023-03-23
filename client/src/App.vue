<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
  mounted() {
    document.body.classList.toggle("dark", this.darkMode);
  },
  watch: {
    darkMode(newValue) {
      document.body.classList.toggle("dark", newValue);
    },
  },
};
</script>
