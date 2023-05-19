export default defineAppConfig({
  title: 'Nuxt SaaS Start',
  description: 'Beautifully designed, fully featured, and ready to go starter kit for Nuxt 3 and Tailwind CSS.',
  features: [
    {
      name: 'Nuxt 3',
      description:
        'The latest and greatest version of Nuxt.js, with a new file system based routing system and a new way to write your components.',
      icon: 'heroicons:cloud-arrow-up',
    },
    {
      name: 'Tailwind CSS',
      description:
        'A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
      icon: 'heroicons:lock-closed',
    },
    {
      name: 'Headless UI',
      description:
        'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
      icon: 'heroicons:arrow-path',
    },
    {
      name: 'Built-in Components',
      description:
        'A collection of UI components built with Tailwind CSS and Headless UI, ready to be used in your projects.',
      icon: 'heroicons:finger-print',
    },
  ],
  feature: {
    title: 'Develop Faster',
    subtitle: 'Everything you need to create your app',
    description: 'Includes everything you need to build your app, including a customizable UI kit, authentication, and more.',
    image: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  },
  announcement: {
    enabled: true,
    message: 'Nuxt Tailwind Kit is now available for Nuxt 3!',
    url: '/',
  },
  cta: {
    title: 'Boost your productivity',
    description: 'Start building your next app with Nuxt Tailwind Kit today.',
    links: [
      {
        title: 'Get Started',
        url: '/',
        type: 'primary',
      },
      {
        title: 'Learn More',
        url: '/',
        type: 'alt',
        arrow: true,
      },
    ],
    image: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  },
})
