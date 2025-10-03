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
			type: "text",
			required: true,
		},
		{
			name: "researchInterests",
			type: "textarea",
			required: true,
		},
	],
	access: {
		create: ({ req }) => req.user,
		read: () => true,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
