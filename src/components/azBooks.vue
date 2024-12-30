<template>
  <section class="az-books">
    <AzContainer>
      <h2>Wyszukaj czasopismo</h2>

      <ul v-if="!isLoading" class="az-books__list">
        <li v-for="book in books" :key="book.id" class="az-books__list-item">
          <AzBook :book="book" @add="addToCart(book)" />
        </li>
      </ul>
      <div v-else>Trwa ładowanie danych</div>

      <AzPagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @update-current-page="(page: number) => (currentPage = page)"
      />
    </AzContainer>
  </section>

  <AzAlert v-if="isAlertToggle" :bg="alertBg" @close="toggleAlert('', '')">
    {{ alertContent }}
  </AzAlert>
</template>

<script lang="ts" setup>
import AzAlert from "@/components/azAlert.vue";
import AzBook from "@/components/azBook.vue";
import AzContainer from "@/components/azContainer.vue";
import AzPagination from "@/components/azPagination.vue";
import type { Book } from "@/types/types";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = computed(() => store.getters["isLoading"]);

const allBooks = computed(() => store.getters["books"] as Book[]);
const itemsPerPage = ref<number>(8);
const currentPage = ref<number>(1);
const totalPages = computed(() => allBooks.value.length / itemsPerPage.value);

const books = computed(() =>
  allBooks.value.slice(
    (currentPage.value - 1) * itemsPerPage.value,
    currentPage.value * itemsPerPage.value
  )
);

const isBookInCart = (book: Book) => {
  return !!(store.getters["cart"] as Book[]).find(
    (cartBook) => cartBook.id === book.id
  );
};

const isAlertToggle = ref<boolean>(false);
const alertBg = ref<string>("");
const alertContent = ref<string>("");
const toggleAlert = (text: string, bg: string) => {
  alertBg.value = bg;
  alertContent.value = text;
  isAlertToggle.value = !isAlertToggle.value;
};

const addToCart = (book: Book) => {
  if (isBookInCart(book)) {
    toggleAlert("Masz już to w koszyku!", "#0a655e");
    return;
  }

  toggleAlert(
    "Produkt: " + book.title + " został dodany do koszyka!",
    "#d1b352"
  );
  store.dispatch("addToCart", book);
};
</script>

<style lang="scss" scoped>
.az-books {
  margin-top: -62px;
  padding-bottom: 75px;
  z-index: 2;

  .az-container {
    flex-direction: column;
  }

  h2 {
    margin: 0 0 90px 0;
    font: normal normal 900 42px/50px Roboto;
    color: $primary-color;
  }

  &__list {
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 18px;

    &-item {
      margin-bottom: 38px;
      width: calc(25% - 13.5px);
    }
  }
}
</style>
