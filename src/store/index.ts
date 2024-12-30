import axios, { type AxiosError } from "axios";
import { createStore } from "vuex";
import { API_URL } from "@/constants/api";
import type { Book } from "@/types/types";

export default createStore<{
  books: Book[];
  isLoading: boolean;
  isError: false | AxiosError;
  cart: Book[];
}>({
  state: {
    books: [],
    isLoading: false,
    isError: false,
    cart: [],
  },
  getters: {
    books(state) {
      return state.books;
    },
    isError(state) {
      return state.isError;
    },
    isLoading(state) {
      return state.isLoading;
    },
    cart(state) {
      return state.cart;
    },
  },
  mutations: {
    setBooks(state, list) {
      state.books = list;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setIsError(state, isError) {
      state.isError = isError;
    },
    addToCart(state, book) {
      state.cart = [...state.cart, book];
    },
    removeFromCart(state, bookId) {
      state.cart = state.cart.filter((book) => book.id !== bookId);
    },
  },
  actions: {
    async getBooks(context) {
      context.commit("setIsLoading", true);

      await axios
        .get<Book[]>(API_URL)
        .then((response) => {
          context.commit("setBooks", response.data);
        })
        .catch((error) => {
          console.error(error as AxiosError);
          context.commit("setIsError", error);
        });

      context.commit("setIsLoading", false);
    },
    addToCart(context, book) {
      context.commit("addToCart", book);
    },
    removeFromCart(context, bookId) {
      context.commit("removeFromCart", bookId);
    },
  },
  modules: {},
});
