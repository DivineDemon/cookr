<template>
  <div
    class="w-screen py-3 px-5 flex flex-row items-center justify-between bg-componentprimary dark:bg-darkcomponentprimary text-textprimary dark:text-darktextprimary"
  >
    <!-- Hamburger Menu Dropdown -->
    <el-dropdown>
      <button>
        <el-icon size="20">
          <Expand />
        </el-icon>
      </button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>About</el-dropdown-item>
          <el-dropdown-item>Privacy Policy</el-dropdown-item>
          <el-dropdown-item>Contact Us</el-dropdown-item>
          <el-dropdown-item>Login/Register</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- Logo -->
    <img src="@/assets/img/logo.png" alt="logo" class="w-16" />

    <!-- Dark Mode Toggle -->
    <DarkMode />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

import DarkMode from "../utils/DarkMode.vue";

export default {
  name: "NavBar",
  components: {
    DarkMode,
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
