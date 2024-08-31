import { CollectionConfig } from "payload/types";

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
};
