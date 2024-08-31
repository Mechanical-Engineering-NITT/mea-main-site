import { CollectionConfig } from "payload/types";

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
};
