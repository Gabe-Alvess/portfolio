import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'socialMedia',
      title: 'Social Media Name',
      type: 'string',
    }),
    defineField({
      name: 'socialMediaUrl',
      title: 'Social Media Link',
      type: 'url',
    }),
  ],
})
