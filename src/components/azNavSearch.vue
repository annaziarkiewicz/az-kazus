<template>
  <div class="az-search az-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.743"
      height="18.743"
      viewBox="0 0 18.743 18.743"
      class="az-search__icon"
    >
      <g transform="translate(-11 -11)">
        <path
          d="M29.513,28.412l-4.506-4.506A7.892,7.892,0,1,0,23.9,25.011l4.506,4.5a.78.78,0,1,0,1.105-1.1ZM18.9,25.225a6.329,6.329,0,1,1,6.33-6.327A6.335,6.335,0,0,1,18.9,25.225Z"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.az-search {
  background: $primary-color;
  box-shadow: 3px 3px 10px #80888833;

  .az-search__icon {
    fill: $white-color;
  }
}
</style>
