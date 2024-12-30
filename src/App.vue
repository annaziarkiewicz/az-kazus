<template>
  <div class="az-website">
    <AzHeader />
    <AzBanner />
    <AzBooks />
  </div>
</template>

<script lang="ts" setup>
import AzBooks from "@/components/azBooks.vue";
import AzHeader from "@/components/azHeader.vue";
import AzBanner from "@/components/azBanner.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("getBooks");
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: $white-color;
  display: flex;
  justify-content: center;
  font-family: Catamaran, sans-serif;
  font-size: 10px;
  line-height: 1.35em;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: self-start;
}

.az-website {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
