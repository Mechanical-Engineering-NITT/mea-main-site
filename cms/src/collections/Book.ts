import { CollectionConfig } from 'payload/types';

const Books: CollectionConfig = {
  slug: 'books',
  fields: [
    {
      name: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'Author',
      type: 'text',
      required: true,
    },
    {
      name: 'Semester',
      type: 'select',
      options: [
        { label: 'Semester 1', value: 'sem1' },
        { label: 'Semester 2', value: 'sem2' },
        { label: 'Semester 3', value: 'sem3' },
        { label: 'Semester 4', value: 'sem4' },
        { label: 'Semester 5', value: 'sem5' },
        { label: 'Semester 6', value: 'sem6' },
        { label: 'Semester 7', value: 'sem7' },
        { label: 'Semester 8', value: 'sem8' },
      ],
      required: true,
    },
    {
      name: 'Description',
      type: 'textarea',
    },
	{
      name: 'Link',
	  type: 'text',
	  required: true,
	},
    {
      name: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default Books;

