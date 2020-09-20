<script lang="ts">
  export let isVisible: boolean;
</script>

<template>
  <section>
    <div class="interior">
      <h1 class="header {isVisible ? 'visible' : 'hidden'}">Development</h1>
      <div class="body {isVisible ? 'visible' : 'hidden'}">
        <!-- <p>
            This web page is built with React.js — more specifically it&apos;s a
            statically rendered React application built using Next.js and hosted on a Netlify CDN.
          </p>
          <p>
            You see this same website built with <a href="https://vue.seanwatters.io">Vue.js</a> and <a href="https://svelte.seanwatters.io">Svelte</a>.
          </p> -->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <img
        class="development-browser {isVisible ? 'visible' : 'hidden'}"
        src="images/development-browser.svg"
        alt="Developer Browser"
      />
      <img
        class="text-editor-dark {isVisible ? 'visible' : 'hidden'}"
        src="images/text-editor-dark.svg"
        alt="React Editor"
      />
    </div>
  </section>
</template>

<style lang="css" scoped>
  section {
    height: 110vh;
    position: relative;
    width: 100vw;
    background-color: black;
    min-height: 680px;
  }
  h1,
  p {
    transition: font-size 1s;
  }
  .interior {
    position: relative;
    margin: 0 auto;
    width: 85vw;
  }
  .hidden {
    opacity: 0;
  }
  .header {
    padding-top: 100px;
    font-size: 1rem;
    color: white;
    margin-left: 0px;
    transition: opacity 1s;
  }
  .body {
    transition: opacity 2s;
    transition-delay: 0.75s;
    padding-left: 10px;
    width: 90vw;
    margin-bottom: 20px;
    color: #666;
    padding-top: 15px;
  }
  p {
    font-size: 0.7rem;
  }

  .development-browser,
  .text-editor-dark {
    position: absolute;
  }
  .development-browser {
    width: 120vw;
    top: 255px;
    right: -40vw;
    transition: top 1.25s, opacity 1.25s;
  }
  .text-editor-dark {
    width: 100vw;
    top: 355px;
    right: -5vw;
    transition: top 1.25s, opacity 1.5s;
    transition-delay: 0.25s;
  }

  .hidden.development-browser,
  .hidden.text-editor-dark {
    top: 100vh;
  }

  @media (min-width: 576px) {
    section {
      min-height: 1085px;
    }
    .interior {
      width: 495px;
    }
    .header {
      font-size: 2rem;
      margin-left: 0px;
      padding-top: 200px;
    }
    .body {
      width: 450px;
    }
    p {
      font-size: 0.9rem;
    }

    .visible.development-browser {
      width: 640px;
      top: 430px;
      right: -200px;
    }
    .visible.text-editor-dark {
      width: 520px;
      top: 570px;
      right: 0px;
    }
  }

  @media (min-width: 768px) {
    section {
      min-height: 1145px;
    }
    .interior {
      width: 650px;
    }
    .header {
      padding-top: 200px;
      color: white;
      margin-left: 0px;
    }
    .body {
      width: 450px;
    }
    p {
      font-size: 0.9rem;
    }

    .visible.development-browser {
      width: 670px;
      top: 400px;
      right: -170px;
    }
    .visible.text-editor-dark {
      width: 590px;
      top: 530px;
      right: 100px;
    }
  }

  @media (min-width: 992px) {
    .interior {
      width: 850px;
    }
    .header {
      padding-top: 300px;
      font-size: 2.25rem;
    }
    .body {
      width: 450px;
    }
    p {
      font-size: 0.95rem;
    }

    .visible.development-browser {
      width: 900px;
      top: 250px;
      right: -475px;
    }
    .visible.text-editor-dark {
      width: 800px;
      top: 550px;
      right: -115px;
    }
  }

  @media (min-width: 1200px) {
    section {
      min-height: 1300px;
    }
    .interior {
      width: 1100px;
    }
    .header {
      font-size: 2.75rem;
    }
    .body {
      width: 550px;
    }
    p {
      font-size: 1.15rem;
    }

    .visible.development-browser {
      width: 1200px;
      top: 225px;
      right: -650px;
    }
    .visible.text-editor-dark {
      width: 925px;
      top: 575px;
      right: -115px;
    }
  }
</style>
