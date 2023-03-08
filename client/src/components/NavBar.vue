<template>
  <div class="navbar fixed top-0" :class="bgColor">
    <div class="navbar-start">
      <div class="dropdown font-barlow">
        <label tabIndex="0" class="btn btn-ghost lg:hidden">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </label>
        <!-- Mobile Menu -->
        <ul
          tabIndex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
          <li v-if="bgColor === 'bg-transparent'">
            <button
              type="button"
              class="lg:px-8 lg:py-3 bg-base-100 lg:text-white hover:underline"
              :style="{ borderRadius: '25px !important' }"
            >
              Item 4
            </button>
          </li>
          <li v-else><a>Item 4</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl font-pacifico">Cookr</a>
    </div>
    <!-- Desktop Menu -->
    <div class="navbar-end hidden lg:flex font-barlow">
      <ul
        class="menu menu-horizontal px-1 flex flex-row items-center justify-center space-x-10"
      >
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
        <li v-if="bgColor === 'bg-transparent'">
          <button
            type="button"
            class="px-8 py-3 bg-base-100 text-white hover:underline"
            :style="{ borderRadius: '25px !important' }"
          >
            Item 4
          </button>
        </li>
        <li v-else><a>Item 4</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Props
defineProps({
  bgColor: String,
});
</script>
