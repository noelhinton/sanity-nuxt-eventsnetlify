export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-eventsnetlify-studio',
                  apiId: 'c63b4c25-05b0-4ff2-b750-3f7694a16762'
                },
                {
                  buildHookId: '6201a2f2c873a078fd438dae',
                  title: 'Events Website',
                  name: 'sanity-nuxt-eventsnetlify',
                  apiId: 'bad2d4d2-d94b-4d69-9bf1-39100a697168'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/noelhinton/sanity-nuxt-eventsnetlify',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-eventsnetlify.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
