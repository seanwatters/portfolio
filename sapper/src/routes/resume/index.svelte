<script lang="ts">
  import Layout from '../../components/Layout.svelte';
  import ResumeData from '../../data/resume/index.json';

  interface Job {
    company: string;
    location: string;
    role: string;
    startDate: string;
    endDate: string;
    highlights: string[];
  }

  interface School {
    institution: string;
    location: string;
    area: string;
    startDate: string;
    endDate: string;
    description: string;
  }

  interface SkillSet {
    title: string;
    keywords: string[];
  }

  const experience: Job[] = ResumeData.experience;
  const education: School[] = ResumeData.education;
  const skills: SkillSet[] = ResumeData.skills;
</script>

<template>
  <Layout title="Sean Watters — Resume" theme="light" location="resume">
    <div class="resume-body">
      <section>
        <h1>experience</h1>
        <hr />
        {#each experience as { company, location, role, startDate, endDate, highlights }}
          <h1 class="title">{company}</h1>
          <p>{startDate} - {endDate}</p>
          <p>{location}</p>
          <p class="job-position">{role}</p>
          <ul>
            {#each highlights as highlight}
              <li>{highlight}</li>
            {/each}
          </ul>
        {/each}
      </section>
      <section>
        <h1>education</h1>
        <hr />
        {#each education as { institution, location, area, startDate, endDate, description }}
          <h1 class="title">{institution}</h1>
          <p class="area-of-study">{area}</p>
          <p>{startDate} - {endDate}</p>
          <p>{location}</p>
          <p class="education-description">{description}</p>
        {/each}
      </section>
      <section>
        <h1>skills</h1>
        <hr />
        {#each skills as { title, keywords }}
          <p>{title}</p>
          <ul>
            {#each keywords as keyword}
              <li>{keyword}</li>
            {/each}
          </ul>
        {/each}
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

  @media only screen and (max-width: 420px) {
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

    h1 {
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
