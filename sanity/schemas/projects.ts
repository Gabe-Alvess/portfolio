import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      title: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'projectTitleNL',
      title: 'Title of the project NL',
      type: 'string',
    }),
    defineField({
      name: 'projectTitleFR',
      title: 'Title of the project FR',
      type: 'string',
    }),
    defineField({
      name: 'projectTitlePT',
      title: 'Title of the project PT',
      type: 'string',
    }),
    defineField({
      name: 'projectImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'summaryNL',
      title: 'Summary NL',
      type: 'text',
    }),
    defineField({
      name: 'summaryFR',
      title: 'Summary FR',
      type: 'text',
    }),
    defineField({
      name: 'summaryPT',
      title: 'Summary PT',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'buildLink',
      title: 'Build Link',
      type: 'url',
    }),
  ],
})
