<script lang="ts">
  export let theme: string;
</script>

<template>
  <footer style="background-color: {theme === 'dark' ? 'black' : 'white'}">
    <nav class="external-icons">
      <!-- <a v-for="{ company, url, size } in icons" :key="company" :href="url" :aria-label="'Link to ' + company">
            <BrandIcon :company="company" :color="theme === 'dark' ? 'white' : 'black'" :size="size" />
          </a> -->
    </nav>
    <div class="tm" style="color: {theme === 'dark' ? 'white' : 'black'}">
      © 2020 sean watters
    </div>
  </footer>
</template>

<style lang="css" scoped>
  footer {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }
  .external-icons {
    width: 67.5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .tm {
    font-size: 0.5rem;
    padding: 10px;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    .external-icons {
      width: 45vw;
    }
  }

  @media (min-width: 768px) {
    .external-icons {
      width: 37.5vw;
    }
  }

  @media (min-width: 992px) {
    .external-icons {
      width: 25vw;
    }
  }

  @media (min-width: 1200px) {
    .external-icons {
      width: 18vw;
    }
  }
</style>
