import { CollectionConfig } from "payload/types";
import { CustomRequest } from "../request";

export const Courses: CollectionConfig = {
	slug: "courses",
	fields: [
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
			name: "semester",
			type: "relationship",
			relationTo: ["semesters"],
			required: true,
			admin: {
				allowCreate: false,
			},
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
