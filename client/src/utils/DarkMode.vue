<template>
  <el-switch
    size="large"
    inline-prompt
    v-model="status"
    :active-icon="Moon"
    :inactive-icon="Sunny"
    @change="toggleDarkMode"
    style="--el-switch-on-color: #040348; --el-switch-off-color: #87ceeb"
  />
</template>

<script setup>
import { useStore } from "vuex";
import { computed, watch, ref } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";

// Store Instance Initialized
const store = useStore();

// Data
const status = ref(false);

// Computed
const darkModeStatus = computed(() => store.state.darkMode);

// Methods
function toggleDarkMode() {
  store.commit("toggleDarkMode");
}

// Watchers
watch(darkModeStatus, (newValue) => {
  status.value = newValue;
});
</script>
