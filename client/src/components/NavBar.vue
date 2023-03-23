<template>
  <div
    class="w-screen py-3 px-5 flex flex-row items-center justify-between bg-componentprimary dark:bg-darkcomponentprimary text-textprimary dark:text-darktextprimary"
  >
    <!-- Hamburger -->
    <Bars3Icon class="text-textprimary dark:text-darktextprimary w-6 h-6" />
    <!-- Logo -->
    <img src="@/assets/img/logo.png" alt="logo" class="w-16" />
    <!-- Dark Mode Toggle -->
    <DarkMode />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/solid";

import DarkMode from "../utils/DarkMode.vue";

export default {
  name: "NavBar",
  components: {
    DarkMode,
    Bars3Icon,
  },
  setup() {
    const store = useStore();
    const isOpen = ref(false);

    const darkMode = computed(() => store.state.darkMode);

    return {
      isOpen,
      darkMode,
    };
  },
};
</script>
