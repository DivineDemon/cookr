<template>
  <div
    id="home"
    class="w-screen h-screen grid grid-cols-2 place-items-center justify-content-center"
  >
    <!-- Text -->
    <div
      class="p-52 w-full h-full flex flex-col items-center justify-center text-light-text"
    >
      <h1
        id="banner-heading"
        v-motion-slide-left
        :delay="150"
        class="w-full font-heading text-9xl font-semibold"
      >
        Cookr
      </h1>
      <p
        id="banner-text"
        v-motion-slide-left
        :delay="300"
        class="w-full font-text font-semibold text-sm"
      >
        Discover a New and Perhaps a Friendlier Way of Cooking with Great
        Homecooks and Chefs from Around the World. Cookr is a web app aimed at
        helping homecooks and chefs from around the world, share their recipes
        and gain traction on it as well.
      </p>
      <div
        id="banner-controls"
        class="mt-10 w-full flex flex-row items-center justify-center space-x-5"
      >
        <button
          v-motion-slide-top
          :delay="450"
          class="w-full bg-light-primary px-5 py-2 rounded-md text-lg font-semibold"
        >
          Get Started
        </button>
        <button
          v-motion-slide-bottom
          :delay="450"
          class="w-full bg-light-secondary px-5 py-2 rounded-md text-lg font-semibold"
        >
          Login
        </button>
      </div>
    </div>
    <!-- Illustrations -->
    <div
      v-motion-slide-right
      :delay="150"
      class="p-52 w-full h-full flex flex-col items-center justify-center relative"
    >
      <!-- Circular Blur Blend -->
      <div
        id="blob"
        class="w-[500px] h-[500px] aspect-square rounded-full bg-gradient-to-r from-light-accent to-light-background animate-spin blur-lg"
      />
      <div class="flex flex-col items-center justify-center absolute">
        <div v-motion-slide-top :delay="900">
          <img
            src="@/assets/images/banner/burger.png"
            alt="burger"
            class="w-36 mr-52 animate-bounce"
          />
        </div>
        <div v-motion-slide-top :delay="800">
          <img
            src="@/assets/images/banner/donut.png"
            alt="donut"
            class="w-36 ml-52 animate-bounce"
          />
        </div>
        <div v-motion-slide-top :delay="700">
          <img
            src="@/assets/images/banner/fries.png"
            alt="fries"
            class="w-36 mr-36 animate-bounce"
          />
        </div>
        <div v-motion-slide-top :delay="600">
          <img
            src="@/assets/images/banner/hotdog.png"
            alt="hotdog"
            class="w-36 ml-36 animate-bounce"
          />
        </div>
        <div v-motion-slide-top :delay="500">
          <img
            src="@/assets/images/banner/pancakes.png"
            alt="pancakes"
            class="w-36 mr-24 animate-bounce"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
