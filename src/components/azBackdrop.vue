<template>
  <Teleport to="body">
    <div class="az-backdrop">
      <slot />
    </div>
  </Teleport>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.az-backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  border: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(62, 62, 62, 0.6);
}
</style>
