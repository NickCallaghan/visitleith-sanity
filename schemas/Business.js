// schemas/pet.js
export default {
  name: 'business',
  type: 'document',
  title: 'Business',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
        },
      ],
    },
    {
      name: 'approved',
      type: 'boolean',
      title: 'approved',
      default: false,
    },
  ],
  initialValue: {
    approved: false,
  },
}
