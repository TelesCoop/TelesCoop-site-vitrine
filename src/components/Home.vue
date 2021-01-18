<template>
  <nav class="navbar is-transparent is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <span class="logo">Teles<span class="bold">Coop</span></span>
      </a>
    </div>
    <div id="main-navigation" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="/">
          Accueil
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            À propos de nous
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Nos valeurs
            </a>
            <a class="navbar-item">
              Nos applications
            </a>
            <a class="navbar-item">
              Notre équipe
            </a>
            <a class="navbar-item">
              Nos clients
            </a>
          </div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button bg-purple" href="mailto:contact@telescoop.fr">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <section class="section">
    <div class="columns">
      <div class="column full-height-with-navbar">
        <div>
          <h1 class="title">{{ metadata.page_title }}</h1>
          <p>{{ metadata.subtitle }}</p>
          <div class="has-text-centered">
            <a
              class="button is-large mt-2 bg-purple"
              href="mailto:contact@telescoop.fr"
              style="margin-top: 5px"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="nos-valeurs" class="p-0">
    <div class="columns m-0">
      <div
        class="column is-half bg-purple full-height-with-navbar svg-container"
      >
        <div class="w-100">
          <Work/>
        </div>
      </div>
      <div class="column is-half full-height-with-navbar">
        <div>
          <h2 class="title has-text-left">Nos valeurs</h2>
          <p>{{ metadata.about_us_content }}</p>
          <ul
            class="list"
            v-for="(item, index) in metadata.about_us_list"
            :key="index"
          >
            <li class="list-item">{{ item }}</li>
          </ul>
          <p>{{ metadata.about_us_footer_content }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="nos-applications" class="p-0">
    <div class="columns m-0">
      <div class="column is-half full-height-with-navbar">
        <div>
          <h2 class="title has-text-left">
            Des applications avec plus d'impact
          </h2>
          <p>
            Nos développeurs sont motivés avant tout par la création
            d’applications à impact social ou écologique. Nous suivons une
            méthodologie agile, ce qui nous permet de développer en temps record
            des applications efficaces et intuitives.
          </p>
          <div class="tile is-ancestor mt-1">
            <div
              v-for="service in services"
              :key="service.id"
              class="tile is-parent"
            >
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-32x32"></figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{{ service.title }}</p>
                    </div>
                  </div>
                  <div class="content">
                    {{ service.content }}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="column is-half bg-yellow full-height-with-navbar svg-container"
      >
        <div class="w-100">
          <Dev/>
        </div>
      </div>
    </div>
  </section>
  <section id="notre-equipe" class="p-0">
    <div class="columns m-0">
      <div class="column is-half bg-purple full-height-with-navbar">
        <div class="w-100">
          <h3 class="title">Une équipe expérimentée et engagée</h3>
          <div class="box">
            <div
              class="employeesCarousel"
              ref="employeesCarousel"

            >
              <div class="card no-box-shadow" v-for="employee in employees" :key="employee.name">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48 has-image-centered">
                        <img
                          :alt="employee.name"
                          class="is-rounded"
                          :src="getImgUrl(employee.img)"
                        />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{{ employee.name }}</p>
                      <p class="subtitle is-6">{{ employee.title }}</p>
                    </div>
                  </div>
                  <div class="content">{{ employee.description }}</div>
                </div>
              </div>
            </div>
            <div class="buttons-carousel has-text-centered">
              <button
                class="prev-employees button button-carousel is-borderless is-paddingless is-size-2"
                @click="changeEmployee('prev')"
              >
                ❮
              </button>
              <button
                class="next-employees button button-carousel is-borderless is-paddingless is-size-2"
                @click="changeEmployee('next')"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-half full-height-with-navbar">
        <div>
          <h2 class="title">{{ metadata.join_us_title }}</h2>
          <p>{{ metadata.join_us_subtitle }}</p>
          <div class="has-text-centered">
            <a
              class="button is-large mt-2 bg-yellow"
              href="mailto:contact@telescoop.fr"
              >Nous contacter</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="nos-clients" class="p-0">
    <div class="columns m-0">
      <div class="column is-half full-height-with-navbar">
        <div>
          <h2 class="title has-text-left">
            Nos clients sont plus efficaces dans leur métier.
          </h2>
          <p>
            Nos développeurs sont motivés par la création
            d’applications à impact social ou écologique.
            Nous suivons une méthodologie agile, ce qui nous permet de développer en temps record
            des applications efficaces et intuitives.
          </p>
          <div class="has-text-centered">
            <a class="button is-large mt-2 bg-yellow" href="https://docs.google.com/presentation/d/1325cayZIEQ13CnXa5OWsowcGzTCBytGOdD-STNnrL5Q" target="_blank">Voir notre présentation</a>
            <a
              class="button is-large mt-2 ml-4 bg-purple"
              href="mailto:contact@telescoop.fr"
            >Nous contacter</a
            >
          </div>


        </div>
      </div>
      <div
        class="column is-half bg-yellow full-height-with-navbar"
        style="padding-top: 0.75rem; padding-bottom: 0.75rem;"
      >
        <div class="w-100">
          <div class="box" style="max-width: 600px; margin: auto">
            <div

              class="testimonialsCarousel"
              ref="testimonialsCarousel"
            >
              <div class="card no-box-shadow"               v-for="testimonial in testimonials"
                   :key="testimonial.id">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48 has-image-centered">
                        <img alt="testimonial.name" :src="getImgUrl(testimonial.logo)" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{{ testimonial.name }}</p>
                    </div>
                  </div>
                  <div class="content is-small">
                    {{ testimonial.description }}
                  </div>
                  <div class="content testimonial">
                    {{ testimonial.testimonial }}
                  </div>
                </div>
                <footer class="card-footer">
                  <p>
                    {{ testimonial.reference }},
                    {{ testimonial.reference_poste }}
                  </p>
                </footer>
              </div>
            </div>
            <div class="buttons-carousel has-text-centered">
              <button
                class="prev-testimonials button-carousel button is-borderless is-paddingless is-size-2"
                @click="changeTestimonial('prev')"
              >
                ❮
              </button>
              <button
                class="next-testimonials button-carousel button is-borderless is-paddingless is-size-2"
                @click="changeTestimonial('next')"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Editeur : Ce site est produit par Telescop SCOP SARL. Pour toute
          question concernant l’utilisation du site www.telescoop.fr vous pouvez
          nous contacter directement en ligne.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import employees from "../assets/data/employees.json";
import metadata from "../assets/data/metadata.json";
import services from "../assets/data/services.json";
import testimonials from "../assets/data/testimonials.json";
import Work from "../components/svg/work.vue"
import Dev from "../components/svg/development.vue"
import Siema from 'siema';
interface Testimonial {
  name: string;
  id: string;
  description: string;
  testimonial: string;
  reference: string;
  reference_poste: string;
  logo: string;
}
interface Employee {
  img: string;
  name: string;
  title: string;
  description: string;
}
interface Service {
  title: string;
  content: string;
  icon: string;
  id: string;
}
const CONFIG_CAROUSEL = {
  duration: 500 as number,
  easing: "ease-in" as string,
  perPage: 1 as number,
  startIndex: 0 as number,
  draggable: true as boolean,
  multipleDrag: true as boolean,
  threshold: 20 as number,
  loop: false as boolean,
  rtl: false as boolean,
}

@Options({
  components: {
    Work,
    Dev

  }
})
export default class Home extends Vue {
  metadata: object = metadata;
  employees: Employee[] = employees;
  services: Service[] = services;
  testimonials: Testimonial[] = testimonials;
  testimonialsCarousel: any;
  employeesCarousel: any;
  mounted() {
    this.employeesCarousel = this.initSiema(".employeesCarousel")
    this.testimonialsCarousel = this.initSiema(".testimonialsCarousel")
  }
  changeEmployee (event: string) {
    this.employeesCarousel[event]()
  }
  changeTestimonial(event: string) {
    this.testimonialsCarousel[event]()
  }
  initSiema(selector: string) {
    return new Siema({
      CONFIG_CAROUSEL,
      selector: selector,
    })
  }
  getImgUrl(imgPath: string) {
    return require(`@/assets/img/${imgPath}`)
  }
}
</script>