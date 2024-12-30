<template>
  <div class="az-container">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.az-container {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
</style>
