import { CollectionConfig } from "payload/types";

export const Initiatives: CollectionConfig = {
	slug: "initiatives",
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			maxLength: 500,
		},
	],
	access: {
		create: ({ req }) => req.user,
		read: () => true,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
