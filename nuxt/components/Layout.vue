<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import Header from './Header';
import Footer from './Footer';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class Layout extends Vue {
    @Prop() readonly theme!: string;
    @Prop() readonly location!: string;
}
</script>

<template>
  <div id="page-container">
    <Header
      :location="location"
    />
    <main>
      <slot />
    </main>
    <Footer :theme="theme" />
  </div>
</template>

<style lang="css">
    main {
        width: 100vw;
        overflow: hidden;
        padding-top: 35px;
    }
    html {
        padding: 0px;
        margin: 0px;
    }
    body {
        padding: 0px;
        margin: 0px;
        color: #111;
        font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    }

    a:link {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
    a:active {
        text-decoration: underline;
    }
    a:hover {
        text-decoration: underline;
    }

    a {
        color: #06c;
    }

    h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
    }

    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.5rem;
    }
    h4 {
        z-index: 100;
        font-size: 1.7em;
        line-height: 95%;
        margin-right: 11%;
        margin-left: 11%;
        clear: both
    }
    p {
        font-size: 1.15rem;
        line-height: 250%;
    }
    ul {
        margin: auto;
        width: 40%;
        font-size: 16px;
        line-height: 150%;
    }

    /* phone */
    @media only screen and (max-width : 420px) {
    h1 {
        font-size: 25px;
    }
    p {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 200%;
        max-width: 87%;
        min-width: 87%;
    }
    }
</style>
