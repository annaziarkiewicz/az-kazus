<template>
  <nav class="az-navigation">
    <ul class="az-navigation__list">
      <li class="az-navigation__list-item">O Kazusie</li>
      <li class="az-navigation__list-item">O Firmie</li>
      <li class="az-navigation__list-item">Czasopisma</li>
      <li class="az-navigation__list-item">Szkolenia</li>
      <li class="az-navigation__list-item">Baza Wiedzy</li>
      <li class="az-navigation__list-item">Kazus TV</li>
      <li class="az-navigation__list-item">Kontakt</li>
    </ul>

    <div class="az-navigation__toolbar">
      <AzNavSearch />
      <AzNavUser />
      <AzNavCart />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import AzNavCart from "@/components/azNavCart.vue";
import AzNavSearch from "@/components/azNavSearch.vue";
import AzNavUser from "@/components/azNavUser.vue";
</script>

<style lang="scss" scoped>
.az-navigation {
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex: 1;
  gap: 76px;

  &__list {
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 35px;

    &-item {
      font: normal normal 300 14px/24px Roboto;
      color: $base-color;

      &:hover {
        cursor: pointer;
        color: $primary-color;
      }
    }
  }

  &__toolbar {
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    gap: 2px;

    .az-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
    }
  }
}
</style>
