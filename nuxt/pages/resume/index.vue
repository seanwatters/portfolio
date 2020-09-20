<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Layout from '@/components/Layout';
import ResumeData from '@/data/resume/index';

interface Job {
  company: string
  location: string
  role: string
  startDate: string
  endDate: string
  highlights: string[]
}

interface School {
  institution: string
  location: string
  area: string
  startDate: string
  endDate: string
  description: string
}

interface SkillSet {
  title: string
  keywords: string[]
}

@Component({
  components: {
    Layout,
  },
  head: {
    title: 'Sean Watters — Resume',
  },
})
export default class Resume extends Vue {
    readonly experience: Job[] = ResumeData.experience;
    readonly education: School[] = ResumeData.education;
    readonly skills: SkillSet[] = ResumeData.skills;
}
</script>

<template>
  <Layout location="resume">
    <div class="resume-body">
      <section>
        <h2>experience</h2>
        <hr>
        <div
          v-for="{
            company, location, role, startDate, endDate, highlights,
          } in experience"
          :key="company"
        >
          <h2 class="title">
            {{ company }}
          </h2>
          <p>{{ startDate }} - {{ endDate }}</p>
          <p>{{ location }}</p>
          <p class="job-position">
            {{ role }}
          </p>
          <ul>
            <li v-for="highlight in highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>education</h2>
        <hr>
        <div
          v-for="{
            institution, location, area, startDate, endDate, description,
          } in education"
          :key="institution"
        >
          <h2 class="title">
            {{ institution }}
          </h2>
          <p class="area-of-study">
            {{ area }}
          </p>
          <p>{{ startDate }} - {{ endDate }}</p>
          <p>{{ location }}</p>
          <p class="education-description">
            {{ description }}
          </p>
        </div>
      </section>
      <section>
        <h2>skills</h2>
        <hr>
        <div v-for="{ title, keywords } in skills" :key="title">
          <p>{{ title }}</p>
          <ul>
            <li v-for="keyword in keywords" :key="keyword">
              {{ keyword }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
</template>

<style lang="css" scoped>
    .resume-body {
        margin: auto;
        width: 55%;
    }

    .education-description {
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 14px;
        margin-left: 8%;
    }

    ul {
        width: 85%;
        margin-bottom: 40px;
    }

    li {
        margin-top: 7px;
        margin-bottom: 7px;
        font-size: 14px;
    }

    p {
        margin-bottom: 0px;
        margin-top: 0px;
        line-height: 200%;
        margin-left: 5%;
    }

    .job-position {
        margin-top: 20px;
        font-weight: 600;
    }

    .area-of-study {
        font-weight: 600;
    }

    .title {
        font-weight: 600;
        font-size: 18px;
        margin-left: 5%;
        margin-top: 40px;
    }

    @media only screen and (max-width : 420px) {
        .resume-body {
            margin: auto;
            width: 90%;
        }

        .job-position {
            margin-top: 10px;
            font-weight: 600;
            font-size: 15px;
        }

        ul {
            width: 80%;
            font-size: 12px;
        }

        h2 {
            margin-bottom: 20px;
            margin-top: 20px;
        }

        p {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 12px;
            line-height: 200%;
            max-width: 95%;
            min-width: 95%;
        }
    }
</style>
