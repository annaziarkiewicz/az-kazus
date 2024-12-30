<template>
  <section class="az-cart" @click.stop>
    <div class="az-cart__header">
      <div class="az-cart__header-title">Twój koszyk</div>
      <button class="az-cart__header-button" @click="emit('close')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.677"
          height="14.677"
          viewBox="0 0 14.677 14.677"
        >
          <path
            d="M9.45,7.573a.324.324,0,0,1,0-.469l5.026-5.026a.724.724,0,0,0,.2-.469.724.724,0,0,0-.2-.469L13.538.2a.724.724,0,0,0-.469-.2A.608.608,0,0,0,12.6.2L7.573,5.228a.324.324,0,0,1-.469,0L2.078.2A.724.724,0,0,0,1.608,0a.724.724,0,0,0-.469.2L.2,1.139a.724.724,0,0,0-.2.469.724.724,0,0,0,.2.469L5.228,7.1a.324.324,0,0,1,0,.469L.2,12.6a.648.648,0,0,0,0,.938l.938.938a.724.724,0,0,0,.469.2.724.724,0,0,0,.469-.2L7.1,9.45a.324.324,0,0,1,.469,0L12.6,14.476a.648.648,0,0,0,.938,0l.938-.938a.648.648,0,0,0,0-.938Z"
          />
        </svg>
      </button>
    </div>

    <ul class="az-cart__list">
      <li v-for="book in cart" :key="book.id" class="az-cart__list-item">
        <AzCartItem :book="book" />
      </li>
    </ul>

    <div v-if="cart.length" class="az-cart__summary">
      <div class="az-cart__summary__info">Łączna kwota</div>
      <div class="az-cart__summary__price">
        <div>
          <span class="az-cart__summary__price--value"
            >{{ totalAmountInCart.toString().split(".")[0] }},</span
          >
          <span class="az-cart__summary__price--currency"
            >{{ totalAmountInCart.toString().split(".")[1] }} PLN</span
          >
        </div>
        <span class="az-cart__summary__price--vat">+ VAT 23%</span>
      </div>
      <button class="az-cart__summary__button">Przejdź do koszyka</button>
    </div>
    <div v-else class="az-cart__empty">Brak produktów w koszyku</div>
  </section>
</template>

<script lang="ts" setup>
import AzCartItem from "@/components/azCartItem.vue";
import type { Book } from "@/types/types";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["close"]);

const cart = computed(() => store.getters["cart"] as Book[]);
const totalAmountInCart = computed(() =>
  cart.value.reduce((acc, b) => acc + b.price.value, 0).toFixed(2)
);
</script>

<style lang="scss" scoped>
.az-cart {
  width: 381px;
  padding: 0 32px 0 28px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 91px;
  left: calc(50% + 235px);
  background: $white-color;
  box-shadow: 5px 5px 15px #00585112;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;

    &-title {
      margin-bottom: 4px;
      font: normal normal bold 18px/18px Roboto;
      color: $base-color;
    }

    &-button {
      margin: 1px -32px 0 0;
      width: 41px;
      height: 41px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $primary-color;
      border: 1px solid $primary-color;
      fill: $white-color;

      &:hover {
        background: $white-color;
        fill: $primary-color;
        cursor: pointer;
      }
    }
  }

  &__list {
    padding: 15px 0 23px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-bottom: 1px solid rgba(110, 132, 132, 0.35);
  }

  &__summary {
    padding-top: 26px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    &__info {
      margin-top: 4px;
      font: normal normal bold 16px/30px Roboto;
      color: $base-color;
    }

    &__price {
      display: flex;
      flex-direction: column;
      align-items: center;

      &--value {
        font: normal normal 900 22px/24px Roboto;
        color: $base-color;
      }

      &--currency {
        font: normal normal 900 15px/24px Roboto;
        color: $base-color;
      }

      &--vat {
        font: normal normal 300 14px/24px Roboto;
        color: $base-color;
      }
    }

    &__button {
      margin: 11px 2px 18px 6px;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $secondary-color;
      border: 0;
      font: normal normal 500 16px/19px Roboto;
      letter-spacing: 2.4px;
      color: $white-color;
      text-transform: uppercase;
    }
  }

  &__empty {
    padding: 26px 0;
    display: flex;
    justify-content: center;
    font: normal normal 500 16px/19px Roboto;
  }
}
</style>
