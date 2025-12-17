import { CollectionConfig } from "payload/types";
import { CustomRequest } from "../request";

export const OEOrMinorCourses: CollectionConfig = {
	slug: "oe-or-minor-courses",
	fields: [
		{
			name: "category",
			options: ["OE", "Minor"],
			type: "select",
			hasMany: false,
			required: true,
		},
		{
			name: "code",
			label: "Course Code",
			type: "text",
			unique: true,
			required: true,
		},
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "department",
			type: "relationship",
			relationTo: "departments",
			hasMany: false,
			required: true,
			admin: {
				allowCreate: false,
			},
		},
	],
	admin: {
		useAsTitle: "code",
	},
	access: {
		create: ({ req }) => req.user,
		read: ({ req }: { req: CustomRequest }) =>
			req.user || req.webClientUser,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
