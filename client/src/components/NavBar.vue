<template>
  <div class="navbar fixed top-0 font-barlow" :class="bgColor">
    <!-- Hamburger Menu -->
    <div class="navbar-start">
      <div class="dropdown">
        <label tabIndex="0" class="btn btn-ghost btn-circle">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </label>
        <ul
          tabIndex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>About Us</a></li>
          <li><a>Privacy Policy</a></li>
          <li v-if="!loggedIn"><a>Login</a></li>
        </ul>
      </div>
    </div>
    <!-- Logo -->
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl font-pacifico">Cookr</a>
    </div>
    <!-- Options -->
    <div class="navbar-end flex flex-row items-end justify-end space-x-3">
      <!-- Authenticated -->
      <div v-if="loggedIn" class="dropdown dropdown-end">
        <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </label>
        <ul
          tabIndex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Profile</a></li>
          <li>
            <a class="justify-between">
              Settings
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Logout</a></li>
        </ul>
      </div>
      <!-- Unauthenticated -->
      <div v-else class="dropdown dropdown-end">
        <div class="tooltip tooltip-bottom" data-tip="Login to Continue!">
          <div class="w-10 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/512/848/848006.png" />
          </div>
        </div>
      </div>
      <!-- Notifications -->
      <div class="dropdown dropdown-end">
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <font-awesome-icon icon="fa-solid fa-bell" class="w-4 h-4" />
            <span class="badge badge-xs badge-primary indicator-item">0</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

// Data
const loggedIn = ref(false);

// Props
defineProps({
  bgColor: String,
});
</script>
