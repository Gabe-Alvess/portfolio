import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'typewriter_1',
      title: 'First Sentence',
      description: 'Simple Typewriter',
      type: 'string',
    }),
    defineField({
      name: 'typewriter_2',
      title: 'Second Sentence',
      description: 'Simple Typewriter',
      type: 'string',
    }),
    defineField({
      name: 'typewriter_3',
      title: 'Third Sentence',
      description: 'Simple Typewriter',
      type: 'string',
    }),
    defineField({
      name: 'typewriter_4',
      title: 'Fourth Sentence',
      description: 'Simple Typewriter',
      type: 'string',
    }),
    defineField({
      name: 'aboutButton',
      title: 'About Button',
      type: 'string',
    }),
    defineField({
      name: 'skillsButton',
      title: 'Skills Button',
      type: 'string',
    }),
    defineField({
      name: 'projectsButton',
      title: 'Projects Button',
      type: 'string',
    }),
    defineField({
      name: 'contactButton',
      title: 'Contact Button',
      type: 'string',
    }),
    defineField({
      name: 'downloadButton',
      title: 'Download Button',
      type: 'string',
    }),
    defineField({
      name: 'introImage',
      title: 'Introduction Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutPic',
      title: 'About Page Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Page Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutSubtitle',
      title: 'About Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'backgroundInformation',
      title: 'Background Information',
      type: 'string',
    }),
    defineField({
      name: 'skillsTitle',
      title: 'Skills Page Title',
      type: 'string',
    }),
    defineField({
      name: 'skillsSubtitle',
      title: 'Skills Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'projectsTitle',
      title: 'Projects Page Title',
      type: 'string',
    }),
    defineField({
      name: 'projectsSubtitle',
      title: 'Projects Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'word_1',
      title: 'Project Word',
      type: 'string',
    }),
    defineField({
      name: 'word_2',
      title: 'Of Word',
      type: 'string',
    }),
    defineField({
      name: 'contactTitle',
      title: 'Contact Page Title',
      type: 'string',
    }),
    defineField({
      name: 'contactSubtitle',
      title: 'Contact Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Address Link',
      type: 'url',
    }),
    defineField({
      name: 'placeholderName',
      title: 'Placeholder Name',
      type: 'string',
    }),
    defineField({
      name: 'placeholderSurname',
      title: 'Placeholder Surname',
      type: 'string',
    }),
    defineField({
      name: 'placeholderSubject',
      title: 'Placeholder Subject',
      type: 'string',
    }),
    defineField({
      name: 'placeholderEmail',
      title: 'Placeholder Email',
      type: 'string',
    }),
    defineField({
      name: 'placeholderMessage',
      title: 'Placeholder Message',
      type: 'string',
    }),
    defineField({
      name: 'submitButton',
      title: 'Submit Button',
      type: 'string',
    }),
    defineField({
      name: 'koalenderUrl',
      title: 'Koalender Link',
      type: 'url',
    }),
    defineField({
      name: 'koalenderText',
      title: 'Koalender Text',
      type: 'string',
    }),
    defineField({
      name: 'myCurriculum',
      title: 'Upload Curriculum',
      type: 'file',
    }),
  ],
})
