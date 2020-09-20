<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BrandIcon from './BrandIcon';

@Component({
  components: {
    BrandIcon,
  },
})
export default class Header extends Vue {
    @Prop() readonly location!: string;
    private iconShouldDisplay: boolean = false;

    mounted () {
      this.iconShouldDisplay = true;
    }
}
</script>

<template>
  <div>
    <header>
      <nav class="title-section">
        <a class="twitter-icon" href="https://twitter.com/sean_watters">
          <BrandIcon v-if="iconShouldDisplay" company="twitter" color="#f5f5f7" size="lg" />
        </a>
        <nuxt-link to="/" class="name-title">
          sean watters
        </nuxt-link>
      </nav>
      <nav class="nav-links">
        <nuxt-link to="/" class="link">
          Home
        </nuxt-link>
        <nuxt-link to="/blog" class="link">
          Blog
        </nuxt-link>
        <nuxt-link to="/resume" class="link">
          Resume
        </nuxt-link>
      </nav>
    </header>
    <h1
      v-if="location"
      class="page-title"
    >
      {{ location }}
    </h1>
  </div>
</template>

<style lang="css" scoped>
    a:link {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
    a:active {
        text-decoration: none;
    }
    header {
        display: flex;
        width: 100vw;
        background-color: rgba(0,0,0,0.92);
        position: fixed;
        z-index: 10;
        justify-content: space-between;
        align-items: center;
        padding: 18px 0;
    }
    .title-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 23vw;
    }
    .twitter-icon {
        padding-left: 6vw;
    }
    .name-title {
        display: none;
    }
    .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50vw;
        padding-right: 6vw;
    }
    .link {
        color: #f5f5f7;
        font-weight: 400;
        text-transform: capitalize;
        font-size: 1rem;
    }
    .page-title {
        text-transform: capitalize;
        text-align: center;
        font-size: 3rem;
        padding-top: 125px;
    }

    @media (min-width: 576px) {
        header {
            padding: 22px 0;
        }
        .nav-links {
            width: 275px;
        }
        .link {
            font-size: 1.3rem;
        }
        .page-title {
            font-size: 2.75rem;
            padding-top: 130px;
        }
    }

    @media (min-width: 768px) {
        header {
            padding: 18px 0;
            width: 100vw;
        }
        .title-section {
            width: 205px;
        }
        .twitter-icon {
            padding-top: 1px;
            padding-left: 40px;
        }
        .name-title {
            display: block;
            color: #f5f5f7;
            color: white;
            font-weight: 400;
            font-size: 1.2rem;
            text-transform: capitalize;
            padding: 0px;
        }
        .nav-links {
            width: 235px;
            padding-top: 3px;
            padding-right: 60px;
        }
        .link {
            font-size: 1rem;
            padding: 0;
        }
        .page-title {
            font-size: 4rem;
            padding-top: 85px;
        }
    }

    @media (min-width: 992px) {
        header {
            padding: 14px;
            width: 100vw;
        }
        .title-section {
            width: 200px;
        }
        .name-title {
            font-size: 1.07rem;
        }
        .nav-links {
            padding-top: 3px;
            width: 250px;
        }
        .link {
            font-size: 1rem;
        }
        .page-title {
            font-size: 4.25rem;
            padding-top: 90px;
        }
    }

    @media (min-width: 1200px) {
        header {
            padding: 14px 0;
            width: 100vw;
        }
        .title-section {
            width: 230px;
        }
        .twitter-icon {
            padding-left: 60px;
        }
        .name-title {
            font-size: 1.22rem;
        }
        .nav-links {
            padding-top: 5px;
            width: 300px;
            padding-right: 100px;
        }
        .link {
            font-size: 1.1rem;
        }
        .page-title {
            font-size: 3.5rem;
            padding-top: 100px;
        }
    }
</style>
