import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'visitleith.co.uk',

  projectId: '0kjphiot',
  dataset: 'test',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
