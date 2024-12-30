<template>
  <section class="az-cart-item">
    <div class="az-cart-item__details">
      <div class="az-cart-item__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="22.241"
          viewBox="0 0 31 22.241"
        >
          <g transform="translate(0 -58.303)">
            <g transform="translate(0 58.303)">
              <path
                d="M30.4,60.154H28.356v-.7a.6.6,0,0,0-.433-.6,16.926,16.926,0,0,0-4.332-.553,11.175,11.175,0,0,0-8.1,3,11.057,11.057,0,0,0-8.1-3,16.926,16.926,0,0,0-4.332.553.6.6,0,0,0-.433.6v.691H.6a.6.6,0,0,0-.6.6V79.941a.6.6,0,0,0,.9.523,21.185,21.185,0,0,1,14.457-1.2H15.5a.6.6,0,0,0,.144,0c8.412-2.133,14.421,1.148,14.457,1.2a.6.6,0,0,0,.9-.517V60.755A.6.6,0,0,0,30.4,60.154ZM1.2,78.986V61.356H2.638v15.07a.6.6,0,0,0,.691.6,26.3,26.3,0,0,1,3.756-.3,15.587,15.587,0,0,1,5.132.775A22.09,22.09,0,0,0,1.2,78.986Zm5.883-3.455a26.442,26.442,0,0,0-3.269.21V59.932a16.573,16.573,0,0,1,3.563-.4,9.811,9.811,0,0,1,7.5,2.944L14.9,77.448A14.046,14.046,0,0,0,7.085,75.531ZM16.1,62.48a9.9,9.9,0,0,1,7.5-2.944,16.645,16.645,0,0,1,3.563.4V75.741a26.435,26.435,0,0,0-3.251-.216A14.163,14.163,0,0,0,16.1,77.442ZM29.792,78.986A22.094,22.094,0,0,0,18.754,77.5a15.624,15.624,0,0,1,5.156-.775,26.288,26.288,0,0,1,3.78.294.6.6,0,0,0,.691-.6V61.356h1.436Z"
                transform="translate(0 -58.303)"
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="az-cart-item__links">
        <div class="az-cart-item__title">
          {{ book.title }}
        </div>
        <button class="az-cart-item__delete" @click="removeFromCart(book.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.056"
            height="16.517"
            viewBox="0 0 13.056 16.517"
          >
            <g transform="translate(-74.133)">
              <g transform="translate(74.133)">
                <path
                  d="M93.063,1.945H90.857V.512A.512.512,0,0,0,90.336,0a.078.078,0,0,0-.056.019A.071.071,0,0,0,90.243,0H84.985a.5.5,0,0,0-.512.512V1.945H82.259a1.112,1.112,0,0,0-1.126,1.126V4.913h.977V15.4a1.1,1.1,0,0,0,1.117,1.117H92.1A1.1,1.1,0,0,0,93.221,15.4V4.913h.968V3.071A1.112,1.112,0,0,0,93.063,1.945ZM85.5,1.024h4.327v.921H85.5ZM92.188,15.4c0,.065-.028.093-.093.093H83.227c-.065,0-.093-.028-.093-.093V4.913h9.054ZM93.156,3.89H82.166V3.071c0-.065.028-.1.093-.1h10.8c.065,0,.093.037.093.1Z"
                  transform="translate(-81.133)"
                />
                <rect
                  width="1.033"
                  height="8.468"
                  transform="translate(8.403 6.114)"
                />
                <rect
                  width="1.033"
                  height="8.468"
                  transform="translate(6.021 6.114)"
                />
                <rect
                  width="1.033"
                  height="8.468"
                  transform="translate(3.638 6.114)"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>

    <div class="az-cart-item__data">
      <p>Cena</p>
      <div class="az-cart-item__price">
        <span class="az-cart-item__price-value"
          >{{ book.price.value.toString().split(".")[0] }},
        </span>
        <span class="az-cart-item__price-currency"
          >{{ book.price.value.toString().split(".")[1] }}
          {{ book.price.currency }}</span
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Book } from "@/types/types";
import { useStore } from "vuex";

const store = useStore();

interface Props {
  book: Book;
}

defineProps<Props>();

const removeFromCart = (id: string) => {
  store.dispatch("removeFromCart", id);
};
</script>

<style lang="scss" scoped>
.az-cart-item {
  background-color: rgba(241, 245, 245, 0.4);

  &__details {
    padding: 8px 13px 8px 10px;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 13px;
    border-bottom: 1px solid #f1f5f5;
  }

  &__icon {
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f5f5;
    border-radius: 26px;
    fill: $primary-color;
  }

  &__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    gap: 13px;
  }

  &__title {
    margin-top: -3px;
    flex: 1;
    max-height: 48px;
    overflow: hidden;
    font: normal normal bold 16px/24px Roboto;
    color: $primary-color;
  }

  &__delete {
    margin-top: 5px;
    background: transparent;
    border: 0;
    fill: $primary-color;

    &:hover {
      cursor: pointer;
      fill: darkred;
    }
  }

  &__data {
    padding: 8px 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      margin: 0;
      font: normal normal 300 14px/24px Roboto;
      color: $base-color;
    }
  }

  &__price {
    margin: -4px 0 4px;
    display: flex;
    align-items: center;
    color: $base-color;

    &-value {
      font: normal normal 900 18px/30px Roboto;
    }

    &-currency {
      font: normal normal 900 15px/30px Roboto;
    }
  }
}
</style>
