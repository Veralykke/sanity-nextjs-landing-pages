export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6204fd9e8719b000660066b0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qf7zneq8',
                  apiId: 'bfe7d745-89d5-4baa-897b-9c7f156065b8'
                },
                {
                  buildHookId: '6204fd9e13780300a8ed5262',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a46i7s69',
                  apiId: '64d40f8a-9685-4c6c-b69d-598221242d4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Veralykke/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a46i7s69.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
