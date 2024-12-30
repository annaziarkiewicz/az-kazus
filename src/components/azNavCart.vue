<template>
  <div class="az-nav-cart az-icon" @click="toggleCart()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.116"
      height="20.089"
      viewBox="0 0 20.116 20.089"
      class="az-cart__icon"
    >
      <g transform="translate(-1232 -66)">
        <g transform="translate(1225.56 59.6)">
          <g transform="translate(6.44 6.4)">
            <path
              d="M24.2,11.66a.691.691,0,0,0-.692-.588h-3.98V9.445a3.045,3.045,0,1,0-6.091,0v1.626H9.461a.691.691,0,0,0-.692.588L6.45,25.675a.68.68,0,0,0,.156.571.71.71,0,0,0,.536.242h18.7a.7.7,0,0,0,.709-.709.877.877,0,0,0-.035-.225L24.2,11.66ZM14.86,9.445a1.626,1.626,0,1,1,3.253,0v1.626H14.86V9.445ZM7.973,25.087l2.094-12.6h3.374v3.962a.709.709,0,0,0,1.419,0V12.491h3.253v3.962a.709.709,0,0,0,1.419,0V12.491h3.374L25,25.087H7.973Z"
              transform="translate(-6.44 -6.4)"
            />
          </g>
        </g>
      </g>
    </svg>
    <div class="az-nav-cart__counter">{{ itemsInCart }}</div>
  </div>

  <template v-if="isCartToggled">
    <AzBackdrop @click="toggleCart()" />
    <AzCartList v-if="isCartToggled" @close="toggleCart()" />
  </template>
</template>

<script lang="ts" setup>
import AzCartList from "@/components/azCartList.vue";
import AzBackdrop from "@/components/azBackdrop.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const itemsInCart = computed(() => store.getters["cart"].length);

const isCartToggled = ref<boolean>(false);
const toggleCart = () => {
  isCartToggled.value = !isCartToggled.value;
};
</script>

<style lang="scss" scoped>
.az-nav-cart {
  margin: 0 -20px 0 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: $white-color;
  cursor: pointer;

  &__icon {
    fill: #465050;
  }

  &__counter {
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8px;
    right: -8px;
    background: transparent
      radial-gradient(closest-side at 50% 50%, $primary-color 0%, #025c55 100%)
      0 0 no-repeat padding-box;
    border-radius: 50%;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    font-family: "TT Commons", sans-serif;
    color: $white-color;
  }
}
</style>
