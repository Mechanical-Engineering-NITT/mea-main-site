import { CollectionConfig } from "payload/types";
import { CustomRequest } from "../request";

export const Semesters: CollectionConfig = {
	slug: "semesters",
	fields: [
		{
			name: "semester",
			type: "number",
			min: 1,
			max: 8,
			unique: true,
			required: true,
		},
	],
	admin: {
		useAsTitle: "semester",
	},
	access: {
		create: ({ req }) => req.user,
		read: ({ req }: { req: CustomRequest }) =>
			req.user || req.webClientUser,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
