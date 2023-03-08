<template>
  <div class="navbar fixed top-0" :class="bgColor">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl font-pacifico">Cookr</a>
    </div>
    <div class="flex-none">
      <ul
        class="menu menu-horizontal px-1 font-barlow flex flex-row items-center justify-center space-x-10"
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
