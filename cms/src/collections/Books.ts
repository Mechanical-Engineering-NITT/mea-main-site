import { CollectionConfig } from "payload/types";
import { CustomRequest } from "../request";

export const Books: CollectionConfig = {
	slug: "books",
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
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "link",
			label: "Google Drive or OneDrive Link",
			type: "text",
			required: true,
		},
	],
	admin: {
		useAsTitle: "name",
	},
	access: {
		create: ({ req }) => req.user,
		read: ({ req }: { req: CustomRequest }) =>
			req.user || req.webClientUser,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
