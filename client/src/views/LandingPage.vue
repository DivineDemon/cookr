<template>
  <!-- Component Container -->
  <div class="bg-white overflow-hidden">
    <!-- Navbar -->
    <NavBar :bgColor="'bg-transparent'" />
    <!-- Content Container -->
    <div class="w-screen h-screen flex flex-row items-center justify-center">
      <!-- Content -->
      <div
        class="w-[50%] h-screen hidden md:flex flex-col items-center justify-center space-y-16"
      >
        <!-- Subtitle -->
        <p
          class="w-full text-center text-xl uppercase font-barlow tracking-widest"
        >
          recipes online
        </p>
        <!-- Title -->
        <div
          class="w-full flex flex-col items-center justify-center text-center font-pacifico font-bold capitalize text-6xl xl:text-8xl 2xl:text-9xl"
        >
          <h1>new recipes</h1>
          <h1>every week</h1>
        </div>
        <!-- Description -->
        <p
          class="w-[75%] text-center font-barlow font-medium text-lg capitalize"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          tempore sed placeat maiores optio a laborum quas aut magnam. Ab
          repudiandae ipsa modi a reiciendis impedit nemo, eaque ipsum ex.
        </p>
        <!-- Button -->
        <router-link
          to="/"
          class="px-10 py-3 bg-base-100 text-white font-semibold rounded-full"
        >
          <span class="w-full">Discover More</span>
        </router-link>
        <!-- Social Links -->
        <div
          class="w-[100%] flex flex-row items-center justify-center space-x-8"
        >
          <font-awesome-icon
            icon="fa-brands fa-facebook"
            class="text-base-100 w-8 h-8"
          />
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="text-base-100 w-8 h-8"
          />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="text-base-100 w-8 h-8"
          />
        </div>
      </div>
      <!-- Image -->
      <div class="landing-image w-screen md:w-[50%] h-screen relative">
        <div
          class="md:hidden relative text-base-200 h-screen flex flex-col items-center justify-center space-y-16"
        >
          <!-- Subtitle -->
          <p
            class="w-full text-center text-xl uppercase font-bold font-barlow tracking-widest"
          >
            recipes online
          </p>
          <!-- Title -->
          <div
            class="w-full flex flex-col items-center justify-center text-center font-pacifico font-bold capitalize text-5xl"
          >
            <h1>new recipes</h1>
            <h1>every week</h1>
          </div>
          <!-- Description -->
          <p
            class="w-[75%] text-center font-barlow font-medium text-md capitalize"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            tempore sed placeat maiores optio a laborum quas aut magnam. Ab
            repudiandae ipsa modi a reiciendis impedit nemo, eaque ipsum ex.
          </p>
          <!-- Button -->
          <router-link
            to="/"
            class="px-10 py-3 bg-base-100 text-white font-semibold rounded-full"
          >
            <span class="w-full">Discover More</span>
          </router-link>
          <!-- Social Links -->
          <div
            class="w-[100%] flex flex-row items-center justify-center space-x-8"
          >
            <font-awesome-icon
              icon="fa-brands fa-facebook"
              class="text-base-100 w-8 h-8"
            />
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="text-base-100 w-8 h-8"
            />
            <font-awesome-icon
              icon="fa-brands fa-twitter"
              class="text-base-100 w-8 h-8"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped>
.landing-image::before {
  content: "";
  background-color: transparent;
  background-image: url("@/assets/img/landing.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
}
</style>
