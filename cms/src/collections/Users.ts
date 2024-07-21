import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',  // Use the 'name' field as the title in the admin panel
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      label: 'Year of Study',
    },
    {
      name: 'department',
      type: 'text',
      required: true,
    },
    {
      name: 'college',
      type: 'text',
      required: true,
    },
  ],
};

export default Users;
