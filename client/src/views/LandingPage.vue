<template>
  <div
    class="w-screen h-screen bg-gradient-to-r from-[#DA914B] to-[#263E3F] flex items-center justify-between overflow-hidden"
  >
    <div
      class="pl-36 pt-36 flex flex-col items-start justify-start w-full h-full"
    >
      <h1 class="text-[#3B1D00] font-bold font-pacifico text-[100px]">Cookr</h1>
      <div
        class="flex flex-col items-start justify-center text-[#3B1D00] font-pacifico text-3xl font-semibold"
      >
        <h1 class="border-b border-white">Make</h1>
        <h1 class="border-b border-white">it</h1>
        <h1 class="border-b border-white">Yourself</h1>
      </div>
      <button
        class="mt-10 px-10 py-3 text-white bg-[#3B1D00] rounded-full font-pacifico flex flex-row items-center justify-center space-x-3"
      >
        <span>Get Started</span>
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
    <div
      class="w-full h-full flex flex-col items-center justify-center relative"
    >
      <span class="text-[100px] absolute top-32 right-0">✨</span>
      <img
        src="@/assets/img/landing.png"
        alt="landing-ramen"
        class="border-4 border-white rounded-full p-5"
      />
      <span class="text-[100px] absolute bottom-32 left-0">✨</span>
    </div>
    <div class="flex flex-col items-end justify-end w-full h-full pr-36 pb-36">
      <!-- <img src="@/assets/img/ramen.png" alt="ramen" class="w-[35%]" /> -->
      <!-- <p class="text-white font-pacifico place-self-end">Because it's Fun!</p> -->
    </div>
  </div>
</template>
