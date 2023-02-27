Vue.component('app-view', {
  template: `
    <div class="container">
      <slot>You have no connexion access!</slot>
    </div>
  `
})

// Header
Vue.component('app-header', {
  props: ['toggler', 'mobile'],
  template: `
    <header class="full__width page__header">
      <nav class="page__navigation">
        <div class="header__logo">
          <img src="/assets/img/logo.svg" alt="">
        </div>

        <button @click="$emit('toggler')" class="burger" :class="{ active: mobile }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul
          class="main__menu"
          :class="{ active: mobile }"
        >
          <li class="menu__item" v-for="(link, index) in links" :key="index">
            <a
              class="menu__link"
              :class="{ section__counter: link.hasCounter, button: link.isButton}"
              :href="link.href"
            >{{ link.text }}</a>
          </li>
        </ul>
      </nav>
    </header>
  `,

  data() {
    return {
      links: [
        { href: '#about',      text: 'About',      hasCounter: true },
        { href: '#experience', text: 'Experience', hasCounter: true },
        { href: '#projects',   text: 'Work',       hasCounter: true },
        { href: '#contact',    text: 'Contact',    hasCounter: true },
        { href: '#resume',     text: 'Resume',     hasCounter: false,  isButton: true }
      ]
    }
  }
})

// app-intro
Vue.component('app-intro', {
  template: `
    <section id="intro" class="section section__intro">
      <span class="small__text">{{ greating }}</span>
      <h1 class="main__title">{{ title }}</h1>
      <h2 class="main__title subtitle">{{ subtitle }}</h2>
      <p class="description__text" v-html='description'></p>
      <button class="button">{{ cta }}</button>
    </section>
  `,

  data() {
    return {
      greating: 'Hi, my name is',
      title: 'John.',
      subtitle: ' I build things for the Web.',
      description: `I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
      Currently, I'm focused on building accessible, humain-centered products at <a href="#">Yan Games Studio</a>.`,
      cta: 'Check out my course!'
      
    }
  }
})

// about
Vue.component('app-about', {
  template: `
    <section id="about" class="section section__about">
      <h2 class="secondary__title section__counter">{{ title }}</h2>
      <div class="about__content">
        <div class="about__text">
          <p class="description__text" v-html="description"></p>
          <ul class="list__grid">
            <li
              class="list__grid-item"
              v-for="(tech, index) in technologies"
              :key="index"
            >{{ tech }}</li>
          </ul>
        </div>
        
        <div class="about__image">
          <figure>
            <img :src="image" alt="">
          </figure>
        </div>
      </div>
    </section>
  `,

  data() {
    return {
      title: 'About Me',
      description: `
        Hello! My name is John and I enjoy creating things that live on the internet. My interest in web
        development started back in 2018 when I decided to try creating HTML pages - turns out hacking together a
        custom reblog button taught me a lot about HTML & Css!
        <br>
        Fast-forward to today, and I've had the privilege of working at <span class="important__text">an
          advertising agency</span>. My main focus these days is building accessible, inclusive products and
        digital experiences at <span class="important__text">Novazeo</span> for a variety of clients.
        <br>
        Here are a few technologies I've working with recently:
      `,
      technologies: ['Javascript (ES6+)', 'React', 'Node.Js', 'TypeScript', 'Eleventy', 'WordPress'],
      image: './assets/img/project.jpg'
    }
  }
})

// Experiences
Vue.component('app-experience', {
  props: ['experiences'],
  template: `
    <section id="experience" class="section section__experience">
      <h2 class="secondary__title section__counter">{{ experiences.title }}</h2>
      <div class="tabs">
        <nav class="tabs__navigation">
          <span
            class="tabs__navigation-item"
            :class="{ active: experiences.selectedTab === tab}"
            v-for="(tab, index) in experiences.tabs"
            :key="index"
            @click="experiences.selectedTab = tab"
          >{{ tab }}</span>
        </nav>

        <div class="tabs__content">

          <div
            class="tabs__content-item"
            v-for="(experience, index) in experiences.experiences"
            :key="index"
            :class="{ active: experience.tab === experiences.selectedTab }"
          >
            <h3 class="third__title" v-html="experience.title"></h3>
            <span class="sub__title">{{ experience.subtitle }}</span>
            <ul class="tasks">
              <li
                class="tasks-item"
                v-for="(task, index) in experience.tasks"
                :key="index"
              >{{ task }}'</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  `
})


// projects
Vue.component('app-projects', {
  template: `
    <section id="projects" class="section section__projects">
      <h2 class="secondary__title section__counter">{{ title }}</h2>
      <div
        class="project__item"
        v-for="(project, index) in projects"
        :key="index"
        :class="{ right: index % 2 !== 0 }"
      >
        <div class="project__image">
          <img :src="project.thumbnail" :alt="project.title">
        </div>

        <div class="project__details">
          <span class="important__text">{{ project.subtitle }}</span>
          <h3 class="project__title">{{ project.title }}</h3>
          <p class="description__text" v-html="project.description"></p>
          <ul class="project__targets">
            <li
              class="target__item"
              v-for="(target, index) in project.targets"
              :key="index"
            >{{ target }}</li>
          </ul>
          <ul class="project__links">
            <li
              class="link__item"
              v-for="(link, index) in project.links"
              :key="index"
            >
              <a :href="link.url" class="link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,

  data() {
    return {
      title: 'Some things I\'ve built',
      projects: [
        {
          thumbnail: '/assets/img/default.jpg',
          title: 'Halcyon Theme',
          subtitle: 'Featured project',
          description: `
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <span class="important__text">Visual Studio Merketplace, Package Control, Atom Package Manager,</span> and <span class="important__text">npm.</span>
          `,
          targets: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
          links: [
            {
              name: 'Github',
              url: 'https://github.com'
            },
            {
              name: 'Live',
              url: '#'
            }
          ]
        }
      ]
    }
  }
})

Vue.component('app-other-projects', {
  template: `
    <section id="other__projects" class="section section__other-projects">

      <h2 class="secondary__title">{{ title }}</h2>
      <span class="small__text">{{ subtitle }}</span>

      <div class="other__projects-grid">
        <div
          class="other__project-item"
          v-for="(project, index) in projects"
          :key="index"
        >
          <div class="project__header">
            <!-- Todo -->
            <div class="project__icon">Icon</div>
            <!-- Todo -->
            <ul class="project__links">
              <li
                class="link__item"
                v-for="(link, index) in project.links"
                :key="index"
              ><a :href="link.url" class="link">{{ link.name }}</a></li>
            </ul>
          </div>
          <div class="project__body">
            <h3 class="third__title">{{ project.title }}</h3>
            <p class="description__text">{{ project.subtitle }}</p>
          </div>
          <div class="project__footer">
            <ul class="project__targets">
              <li
                class="target__item"
                v-for="(target, index) in project.targets"
                :key="index"
              >{{ target }}</li>
            </ul>
          </div>
        </div>

      </div>
      <div class="button__container">
        <button class="button">Show More</button>
      </div>
    </section>
  `,

  data() {
    return {
      title: 'Other Noteworthy Projects',
      subtitle: 'View the archive',
      projects: [
        {
          title: 'Intergrating Algolia Search with WordPress Multisite',
          subtitle: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
          targets: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
          links: [
            {
              name: 'Github',
              url: 'https://github.com'
            },
            {
              name: 'Live',
              url: '#'
            }
          ]
        }
      ]
    }
  }
})


// contact
Vue.component('app-contact', {
  template: `
    <section id="contact" class="section section__contact text-center">
      <span class="small__text section__counter">{{ subtitle }}</span>
      <h2 class="secondary__title">{{ title }}</h2>

      <p
        class="description__text"
        v-html="description"
      ></p>

      <div class="button__container">
        <button class="button">{{ cta }}</button>
      </div>
    </section>
  `,
  data() {
    return {
      title: 'Get In Touch',
      subtitle: 'What\'s Next?',
      description: 'Although I\'m not Currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
      cta: 'Say Hello'
    }
  }
})


// footer
Vue.component('app-footer', {
  template: `
    <footer class="footer">
      <p class="copyright__text">{{ copyright }}</p>
      <div class="github__numbers">
        <div
          class="stars"
          v-for="(number, index) in numbers"
          :key="index"
        >{{ number }}</div>
      </div>
    </footer>
  `,

  data() {
    return {
      copyright: 'Designed & Built by Me',
      numbers: [
        'Stars',
        'Forks'
      ]
    }
  }
})

const app = new Vue({
  el: "#app",

  data: {
    mobileMenu: false,
    experiences: []
  },

  methods: {
    toggleMenu: function () {
      this.mobileMenu = !this.mobileMenu
    }
  },

  created() {

    fetch("../assets/data/data.json")
    .then ((response) => response.json())
    .then ((data) => {
      this.experiences = data
    })
    .catch((error) => {
      console.error("Error: ", error);
    })

  }
})