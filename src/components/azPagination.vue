<template>
  <section class="az-pagination">
    <ul class="az-pagination__list">
      <li
        class="az-pagination__list-item"
        :class="{ disabled: currentPage === 1 }"
        @click="currentPage !== 1 ? updateCurrentPage(currentPage - 1) : null"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5.004"
          height="9.355"
          viewBox="0 0 5.004 9.355"
        >
          <g transform="translate(5.004) rotate(90)">
            <path
              d="M9.259.1a.331.331,0,0,0-.467,0L4.682,4.215.564.1A.33.33,0,0,0,.1.564L4.44,4.908a.323.323,0,0,0,.234.1.336.336,0,0,0,.234-.1L9.251.564A.324.324,0,0,0,9.259.1Z"
            />
          </g>
        </svg>
      </li>
      <li
        v-for="page in totalPages"
        :key="page"
        :class="{
          'az-pagination__list-item': true,

          active: currentPage === page,
        }"
        @click="updateCurrentPage(page)"
      >
        {{ page }}
      </li>
      <li
        class="az-pagination__list-item"
        :class="{ disabled: currentPage === totalPages }"
        @click="
          currentPage !== totalPages ? updateCurrentPage(currentPage + 1) : null
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5.004"
          height="9.355"
          viewBox="0 0 5.004 9.355"
        >
          <g transform="translate(0 9.355) rotate(-90)">
            <path
              d="M9.259.1a.331.331,0,0,0-.467,0L4.682,4.215.564.1A.33.33,0,0,0,.1.564L4.44,4.908a.323.323,0,0,0,.234.1.336.336,0,0,0,.234-.1L9.251.564A.324.324,0,0,0,9.259.1Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update-current-page"]);

interface Props {
  currentPage: number;
  totalPages: number;
}

defineProps<Props>();

const updateCurrentPage = (page: number) => {
  emit("update-current-page", page);
};
</script>

<style lang="scss" scoped>
.az-pagination {
  width: 100%;
  display: flex;
  justify-content: center;

  &__list {
    display: flex;
    flex-direction: row;
    gap: 5px;

    &-item {
      width: 33px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      font: normal normal 300 12px/20px Roboto;
      color: #6e8484;
      fill: #6e8484;

      &.active,
      &:not(.disabled):not(.active):hover {
        background: $primary-color;
        font: normal normal bold 14px/24px Roboto;
        color: $white-color;
        fill: $white-color;
      }

      &:not(.disabled):not(.active):hover {
        cursor: pointer;
      }

      &.disabled {
        cursor: not-allowed;
      }
    }
  }
}
</style>
