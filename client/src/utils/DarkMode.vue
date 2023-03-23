<template>
  <button @click="toggleDarkMode" class="w-6 h-6">
    <MoonIcon v-if="darkMode" class="text-white" />
    <SunIcon v-else class="text-yellow-500" />
  </button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";

export default {
  name: "DarkMode",
  components: {
    SunIcon,
    MoonIcon,
  },
  setup() {
    const store = useStore();

    const darkMode = computed(() => store.state.darkMode);

    function toggleDarkMode() {
      store.dispatch("toggleDarkMode");
    }

    return {
      darkMode,
      toggleDarkMode,
    };
  },
};
</script>
