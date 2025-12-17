import { CollectionConfig } from "payload/types";
import { CustomRequest } from "../request";

export const Departments: CollectionConfig = {
	slug: "departments",
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "shortName",
			type: "text",
			required: true,
			label: "Short Name (For example, ME for Mechanical Engineering)",
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
