<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabIndex="0" class="btn btn-ghost btn-circle">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </label>
        <ul
          tabIndex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-barlow"
        >
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl font-pacifico">CookR</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <font-awesome-icon icon="fa-regular fa-bell" />
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>
</template>
