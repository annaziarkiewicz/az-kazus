<template>
  <section class="az-book" @click="emit('add')">
    <div class="az-book__cover">
      <img :src="book.cover" :alt="book.title"/>
    </div>
    <div class="az-book__details">
      <div class="az-book__title">{{ book.title }}</div>
      <div class="az-book__price">
        <span class="az-book__price-value">{{
          book.price.value.toString().replace(".", ",")
        }}</span>
        <span class="az-book__price-currency">{{ book.price.currency }}</span>
      </div>
      <div class="az-book__vat">+ vat 23%</div>
      <div class="az-book__more">szczegóły</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Book } from "@/types/types";

const emit = defineEmits(["add"]);

interface Props {
  book: Book;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.az-book {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: $primary-color;

  &:hover {
    cursor: pointer;
    color: $secondary-color;

    .az-book__details {
      border-color: $secondary-color;
      box-shadow: 20px 20px 40px #2e383826;
    }
  }

  &__cover {
    margin: 0 auto -106px;
    height: 210px;
    z-index: 1;

    img {
      max-width: 100%;
      max-height: 190px;
    }
  }

  &__details {
    width: 100%;
    padding: 80px 20px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
    border: 1px solid transparent;
    position: relative;
    transition: 0.25s;
  }

  &__title {
    margin-bottom: 30px;
    font: normal normal 900 18px/30px Roboto;
    text-align: center;
  }

  &__price {
    margin-bottom: 7px;
    display: flex;
    gap: 4px;
    font-weight: 900;
    line-height: 30px;
    font-family: "Roboto", sans-serif;

    &-value {
      font-size: 30px;
    }

    &-currency {
      margin-top: 4px;
      font-size: 18px;
      text-transform: uppercase;
    }
  }

  &__vat {
    margin-bottom: 12px;
    font: normal normal 300 14px/24px Roboto;
    text-transform: uppercase;
  }

  &__more {
    font: normal normal 300 16px/19px Roboto;
    text-transform: uppercase;
    letter-spacing: 2.4px;
  }
}
</style>
