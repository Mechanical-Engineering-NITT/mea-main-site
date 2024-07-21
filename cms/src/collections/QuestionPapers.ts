import { CollectionConfig } from 'payload/types';

const QuestionPapers: CollectionConfig = {
  slug: 'question-papers',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'semester',
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
      name: 'year',
      type: 'number',
      required: true,
    },
	{
	  name: 'Link',
	  type: 'text',
	  required: true,
	},
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default QuestionPapers;

