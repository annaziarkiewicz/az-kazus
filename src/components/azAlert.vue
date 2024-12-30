<template>
  <AzBackdrop>
    <div class="az-alert" :style="'background: ' + bg">
      <div class="az-alert__loader">
        <div class="az-alert__progress-bar"></div>
      </div>
      <slot />
    </div>
  </AzBackdrop>
</template>

<script lang="ts" setup>
import AzBackdrop from "@/components/azBackdrop.vue";
import { onMounted } from "vue";

const emit = defineEmits(["close"]);

interface Props {
  bg: string;
}

defineProps<Props>();

onMounted(() => {
  setTimeout(() => {
    emit("close");
  }, 1000);
});
</script>

<style lang="scss" scoped>
.az-alert {
  padding: 12px 16px;
  margin: 300px auto;
  width: 360px;
  z-index: 1;
  display: block;
  justify-content: center;
  align-items: center;
  font: normal normal 500 14px/20px Roboto;
  color: $white-color;

  &__loader {
    height: 3px;
    width: calc(100% + 32px);
    margin: -12px -16px 12px -16px;
  }

  @keyframes loading {
    0% {
      width: 0;
    }
    98% {
      width: 100%;
    }
  }

  &__progress-bar {
    height: 3px;
    display: block;
    background: $white-color;
    width: 0;
    animation-name: loading;
    animation-duration: 1.1s;
    animation-iteration-count: 1;
  }
}
</style>
