<template>
  <div class="az-user az-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.33"
      height="18.33"
      viewBox="0 0 18.33 18.33"
      class="az-user__icon"
    >
      <path
        d="M12.373,11.3a6.03,6.03,0,0,0,2.9-5.194,6.11,6.11,0,1,0-12.22,0,6.03,6.03,0,0,0,2.9,5.194A9.446,9.446,0,0,0,0,18.33H1.528a7.829,7.829,0,0,1,15.275,0H18.33A9.2,9.2,0,0,0,12.373,11.3ZM4.583,6.11a4.583,4.583,0,1,1,4.583,4.583A4.6,4.6,0,0,1,4.583,6.11Z"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.az-user {
  margin: 0 -5px 0 5px;
  background: $white-color;

  &__icon {
    fill: #465050;
  }
}
</style>
