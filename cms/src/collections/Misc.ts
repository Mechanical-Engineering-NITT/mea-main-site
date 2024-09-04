import { CollectionConfig } from "payload/types";
import { CustomRequest } from "../request";

export const Misc: CollectionConfig = {
	slug: "miscellaneous",
	fields: [
		{
			name: "course",
			type: "relationship",
			relationTo: "courses",
			hasMany: false,
			required: true,
			admin: {
				allowCreate: false,
			},
		},
		{
			name: "description",
			type: "text",
			required: true,
		},
		{
			name: "link",
			label: "Google Drive or OneDrive Link to resource file or folder",
			type: "text",
			required: true,
		},
	],
	admin: {
		useAsTitle: "description",
	},
	access: {
		create: ({ req }) => req.user,
		read: ({ req }: { req: CustomRequest }) =>
			req.user || req.webClientUser,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
