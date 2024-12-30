<template>
  <header class="az-header">
    <AzContainer>
      <AzLogo />
      <AzNavigation />
    </AzContainer>
  </header>
</template>

<script lang="ts" setup>
import AzContainer from "@/components/azContainer.vue";
import AzLogo from "@/components/azLogo.vue";
import AzNavigation from "@/components/azNavigation.vue";
</script>

<style lang="scss" scoped>
.az-header {
  z-index: 11;
  background: $white-color;

  .az-container {
    padding-top: 8px;
    height: 90px;
    display: flex;
    align-items: center;
  }
}
</style>
