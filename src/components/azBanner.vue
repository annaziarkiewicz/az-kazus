<template>
  <section class="az-banner">
    <div class="az-banner__backdrop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="448.706"
        height="472.241"
        viewBox="0 0 448.706 472.241"
        class="az-banner__backdrop-icon"
      >
        <path
          d="M560.519,508.536c-10.745,14.054-33.066,29.751-72.738,29.751-54.562,0-86.8-24.794-86.8-67.769v-177c-.83-57.03-27.278-57.848-41.327-57.848H275.433c-4.128,0-4.952.819-4.952,2.473V384.46c0,25.624.824,31.417,8.261,31.417h32.242c5.788,0,6.612,2.473,6.612,4.946s-.824,4.139-6.612,4.139H121.69c-6.612,0-7.442-1.66-7.442-4.139s.83-4.946,7.442-4.946h32.236c6.612,0,7.442-5.793,7.442-31.417V116.64c0-25.618-.83-30.57-7.442-30.57H121.69c-6.612,0-7.442-2.5-7.442-4.969s.83-4.139,7.442-4.139H263.039c5.782,0,7.442,1.66,7.442,4.139V224.917c0,1.66.824,3.315,4.952,3.315h71c25.624,0,34.715-10.74,34.715-38.854,0-23.145-7.442-43.811-7.442-66.945,0-38.024,30.587-55.387,67.786-55.387,33.884,0,71.084,22.321,71.084,61.174,0,28.916-22.32,48.769-50.429,48.769-26.448,0-51.242-17.357-51.242-45.466,0-22.326,19.836-29.751,19.836-40.514,0-7.436-6.612-10.734-13.224-10.734-19.012,0-34.72,17.363-34.72,38.842,0,24.788,7.442,47.945,7.442,72.738,0,14.049-4.958,28.108-16.533,36.375v.819c61.169-5.788,135.561,25.635,135.561,100.858V500.27c0,9.927,1.654,21.49,15.714,21.49,10.74,0,22.315-8.266,28.1-17.357,1.655-3.3,3.309-4.958,7.442-2.479,1.649,1.654,2.479,3.314,0,6.612"
          transform="translate(-113.748 -66.547)"
        />
      </svg>
    </div>
    <AzContainer>
      <div class="az-banner__description">
        <h1>Czasopisma</h1>
        <p class="az-banner__description-text">
          Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu
          Podatkowego”, który tym razem poświęcony jest w dużej części zmianom w
          podatkach w roku 2019.
        </p>
        <p class="az-banner__description-subtext">
          Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie
          rozliczania kosztów używania samochodów osobowych, wprowadzenie „exit
          tax” czy zmiany dotyczące poboru podatku u źródła na gruncie podatków
          dochodowych, poświęcając im odrębne artykuły.
        </p>
      </div>
      <div class="az-banner__image">
        <img src="../assets/images/banner.png" alt="Banner" />
      </div>
    </AzContainer>
  </section>
</template>

<script lang="ts" setup>
import AzContainer from "@/components/azContainer.vue";
</script>

<style lang="scss" scoped>
.az-banner {
  min-height: 360px;
  position: relative;

  &__backdrop {
    width: 100%;
    height: 360px;
    display: flex;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    background: $primary-color;

    &-icon {
      position: absolute;
      top: calc(50% - 256px);
      left: calc(50% - 873px);
      fill: none;
      stroke: $white-color;
      opacity: 0.2;
    }
  }

  .az-container {
    flex-direction: row;
    justify-content: space-between;
  }

  &__description {
    max-width: 48%;
    margin-left: -1px;

    h1 {
      margin: 67px 0 32px;
      font: normal normal bold 56px/60px Roboto;
      color: $white-color;
    }

    &-text {
      margin-bottom: 24px;
      font: normal normal bold 14px/24px Roboto;
      color: $white-color;
    }

    &-subtext {
      margin-bottom: 20px;
      font: normal normal 300 14px/24px Roboto;
      color: #f1f5f5;
    }
  }

  &__image {
    max-width: 45.6%;
    margin-top: 14px;
  }
}
</style>
