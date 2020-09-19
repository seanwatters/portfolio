<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SectionOne extends Vue {
    @Prop() readonly isVisible!: boolean;
}
</script>

<template>
  <section ref="{refInjection}">
    <h1
      :class="`header ${isVisible ? 'visible' : 'hidden'}`"
    >
      Design
    </h1>
    <p
      :class="`body ${isVisible ? 'visible' : 'hidden'}`"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation.
    </p>
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon material-ui`"
      src="images/logos/material-ui.png"
      alt="Material UI"
    >
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon vuetify`"
      src="images/logos/vuetify.png"
      alt="Vuetify"
    >
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon material-design`"
      src="images/logos/material-design.png"
      alt="Material Design"
    >
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon tailwindcss`"
      src="images/logos/tailwindcss.png"
      alt="TailwindCSS"
    >
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon bootstrap`"
      src="images/logos/bootstrap.png"
      alt="Bootstrap"
    >
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon sass`"
      src="images/logos/sass.png"
      alt="SASS"
    >
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon adobe-xd`"
      src="images/logos/adobe-xd.png"
      alt="Adobe XD"
    >
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon adobe-illustrator`"
      src="images/logos/adobe-illustrator.png"
      alt="Adobe Illustrator"
    >
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon photoshop`"
      src="images/logos/photoshop.png"
      alt="Photoshop"
    >
    <img
      :class="`${isVisible ? 'visible' : 'hidden'} icon invision`"
      src="images/logos/invision.svg"
      alt="Invision"
    >
  </section>
</template>

<style lang="css" scoped>
    section {
        height: 110vh;
        margin: 0 auto;
        width: 90vw;
        position: relative;
        background-color: white;
    }
    p {
        font-size: 0.7rem;
    }

    .header {
        font-size: 1rem;
        transition: opacity 1s, font-size 1s;
        padding-top: 200px;
    }
    .body {
        transition: opacity 2s, font-size 1s;
        transition-delay: 0.75s;
        padding-left: 10px;
        width: 300px;
        margin-bottom: 20px;
        color: #666;
        padding-top: 15px;

    }

    .icon {
        box-shadow: 5px 5px 15px rgb(0,0,0,0.5);
        background-color: white;
        border-radius: 20%;
        position: absolute;
    }
    .hidden {
        opacity: 0;
    }

    .photoshop,
    .adobe-xd,
    .adobe-illustrator {
        height: 75px;
        width: 75px;
    }
    .photoshop {
        left: -1vw;
        top: 95px;
        transition: opacity 2s, top 2s, height 1s, width 1s, left 1s;
    }
    .adobe-xd {
        left: 17vw;
        top: 115px;
        transition: opacity 2s, height 1s, width 1s, left 1s, top 1s;
        transition-delay: 0.35s;
    }
    .adobe-illustrator {
        left: 67.5vw;
        top: 90px;
        transition: opacity 2s, height 1s, width 1s, left 1s, top 1s;
        transition-delay: 0.7s;
    }

    .invision,
    .material-ui {
        height: 60px;
        width: 60px;
    }
    .invision {
        left: 670px;
        top: 70px;
        transition: opacity 2s, height 1s, width 1s, left 1s, top 1s;
        transition-delay: 0.5s;
    }
    .material-ui {
        left: 4vw;
        top: 350px;
        transition: opacity 1.5s, height 1s, width 1s, left 1s, top 1s;
    }

    .tailwindcss,
    .vuetify,
    .material-design {
        width: 55px;
        height: 55px;
    }
    .tailwindcss {
        top: 385px;
        left: 15vw;
        z-index: 1;
        transition: opacity 1s, height 1s, width 1s, left 1s, top 1s;
        transition-delay: 0.5s;
    }
    .vuetify {
        padding: 22.5px;
        left: 1300px;
        top: 270px;
        transition: opacity 2s, height 1s, width 1s, left 1s, top 1s;
    }
    .material-design {
        padding: 15px;
        top: 340px;
        left: 60vw;
        z-index: 1;
        transition: opacity 1s, height 1s, width 1s, left 1s, top 1s;
    }

    .bootstrap,
    .sass {
        height: 35px;
        width: 35px;
    }
    .bootstrap {
        left: 52vw;
        top: 425px;
        transition: opacity 0.5s, height 1s, width 1s, left 1s, top 1s;
    }
    .sass {
        padding: 15px;
        left: 25vw;
        top: 470px;
        z-index: 2;
        transition: opacity 3s, height 1s, width 1s, left 1s, top 1s;
    }

    @media (min-width: 576px) {
        section {
            width: 500px;
            min-height: 815px;
        }
        p {
            font-size: 0.9rem;
        }
        .header {
            font-size: 2rem;
            padding-top: 235px;
            margin-left: 0px;
        }
        .body {
            width: 370px;
            margin-left: 0px;
        }

        .photoshop,
        .adobe-xd,
        .adobe-illustrator {
            height: 125px;
            width: 125px;
        }

        .photoshop {
            left: 375px;
            top: 125px;
        }
        .adobe-xd {
            left: -20px;
            top: 500px;
        }
        .adobe-illustrator {
            left: 200px;
            top: 550px;
        }

        .material-ui,
        .invision {
            height: 75px;
            width: 75px;
        }
        .invision {
            left: 465px;
            top: 225px;
        }
        .material-ui {
            left: 70px;
            top: 640px;
        }

        .material-design,
        .vuetify,
        .tailwindcss {
            height: 60px;
            width: 60px;
        }
        .vuetify {
            padding: 22.5px;
            left: 300px;
            top: 500px;
        }
        .material-design {
            padding: 15px;
            top: 450px;
            left: 80px;
        }
        .tailwindcss {
            top: 205px;
            left: 340px;
        }

        .bootstrap,
        .sass {
            height: 60px;
            width: 60px;
        }
        .bootstrap {
            left: 440px;
            top: 720px;
        }
        .sass {
            padding: 15px;
            left: 300px;
            top: 615px;
        }
    }

    @media (min-width: 768px) {
        section {
            width: 700px;
            min-height: 815px;
        }
        p {
            font-size: 1rem;
        }
        .header {
            font-size: 2rem;
            padding-top: 250px;
            margin-left: 305px;
        }
        .body {
            width: 390px;
            margin-left: 305px;
        }

        .photoshop,
        .adobe-xd,
        .adobe-illustrator {
            height: 125px;
            width: 125px;
        }

        .photoshop {
            left: 115px;
            top: 200px;
        }
        .adobe-xd {
            left: -20px;
            top: 325px;
        }
        .adobe-illustrator {
            left: 115px;
            top: 450px;
        }

        .material-ui,
        .invision {
            height: 75px;
            width: 75px;
        }
        .invision {
            left: 200px;
            top: 400px;
        }
        .material-ui {
            left: 0;
            top: 505px;
        }

        .material-design,
        .vuetify,
        .tailwindcss {
            height: 60px;
            width: 60px;
        }
        .vuetify {
            padding: 22.5px;
            left: 570px;
            top: 550px;
        }
        .material-design {
            padding: 15px;
            top: 425px;
            left: 50px;
        }
        .tailwindcss {
            top: 242.5px;
            left: 86px;
        }

        .bootstrap,
        .sass {
            height: 60px;
            width: 60px;
        }
        .bootstrap {
            left: 535px;
            top: 620px;
        }
        .sass {
            padding: 15px;
            left: 370px;
            top: 570px;
        }
    }

    @media (min-width: 1200px) {
        section {
            width: 1000px;
        }
        p {
            font-size: 1.15rem;
        }
        .header {
            font-size: 2.75rem;
            padding-top: 270px;
            margin-left: 450px;
        }
        .body {
            width: 580px;
            margin-left: 450px;
        }

        .photoshop,
        .adobe-xd,
        .adobe-illustrator {
            height: 175px;
            width: 175px;
        }

        .photoshop {
            left: 150px;
            top: 200px;
        }
        .adobe-xd {
            left: -100px;
            top: 350px;
        }
        .adobe-illustrator {
            left: 150px;
            top: 500px;
        }

        .invision,
        .material-ui {
            height: 125px;
            width: 125px;
        }
        .invision {
            left: 270px;
            top: 320px;
        }
        .material-ui {
            left: -150px;
            top: 550px;
        }

        .material-design,
        .vuetify,
        .tailwindcss {
            height: 80px;
            width: 80px;
        }
        .vuetify {
            padding: 22.5px;
            left: 850px;
            top: 525px;
        }
        .material-design {
            padding: 15px;
            top: 475px;
            left: 25px;
        }
        .tailwindcss {
            top: 242.5px;
            left: 86px;
        }

        .bootstrap,
        .sass {
            height: 75px;
            width: 75px;
        }
        .bootstrap {
            left: 800px;
            top: 610px;
        }
        .sass {
            padding: 15px;
            left: 550px;
            top: 650px;
        }
    }
</style>
