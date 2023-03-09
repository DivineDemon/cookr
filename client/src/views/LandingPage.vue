<template>
  <div class="w-screen h-screen bg-white overflow-hidden">
    <NavBar :bgColor="'bg-transparent'" />
    <div class="w-full h-full flex flex-row items-center justify-center">
      <!-- Content -->
      <div
        class="lg:w-[50%] h-[100%] bg-white flex flex-col items-center md:items-start justify-center px-28 xl:px-32 pt-28 leading-tight"
      >
        <p class="uppercase font-barlow tracking-widest xl:text-2xl">
          recipes online
        </p>
        <h1
          class="w-[100%] text-[50px] md:text-[100px] lg:text-[50px] xl:text-[75px] 2xl:text-[150px] text-center md:text-left font-pacifico font-bold capitalize"
        >
          New recipes every week
        </h1>
        <p
          class="hidden md:block mt-10 xl:mt-8 2xl:mt-14 font-barlow font-medium text-lg 2xl:text-2xl capitalize"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          tempore sed placeat maiores optio a laborum quas aut magnam. Ab
          repudiandae ipsa modi a reiciendis impedit nemo, eaque ipsum ex.
        </p>
        <router-link
          to="/"
          class="mt-5 px-10 py-3 bg-base-100 text-white font-semibold rounded-full"
        >
          <span class="w-full text-xs lg:text-lg">Discover More</span>
        </router-link>
        <div class="mt-40 flex flex-row items-center justify-center space-x-8">
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
      <div id="landing-image" class="w-0 lg:w-[50%] h-[100%]" />
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped>
#landing-image {
  background-color: transparent;
  background-image: url("@/assets/img/landing.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
