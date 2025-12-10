import { CollectionConfig } from "payload/types";

export const Projects: CollectionConfig = {
	slug: "projects",
	fields: [
		{
			name: "professor",
			type: "text",
			required: true,
		},
		{
			name: "emailID",
			type: "email",
			required: true,
		},
		{
			name: "researchInterests",
			type: "textarea",
			required: true,
		},
		{
			name: "laboratryOrLocation",
			type: "text",
		},
	],
	access: {
		create: ({ req }) => req.user,
		read: () => true,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
