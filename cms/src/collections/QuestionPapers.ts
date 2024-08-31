import { CollectionConfig } from "payload/types";
import { APIError } from "payload/errors";

export const QuestionPapers: CollectionConfig = {
	slug: "question-papers",
	labels: {
		singular: "Question Paper",
		plural: "Question Papers",
	},
	upload: {
		staticURL: "/media/questionPapers",
		staticDir: "../media/questionPapers",
		mimeTypes: ["application/pdf"],
	},
	fields: [
		{
			name: "semester",
			type: "relationship",
			relationTo: ["semesters"],
			required: true,
			admin: {
				allowCreate: false,
			},
		},
		{
			name: "course",
			type: "relationship",
			relationTo: ["courses"],
			required: true,
			admin: {
				allowCreate: false,
			},
		},
		{
			name: "year",
			type: "date",
			required: true,
			admin: {
				date: {
					pickerAppearance: "monthOnly",
					displayFormat: "yyyy",
				},
			},
		},
	],
	hooks: {
		beforeValidate: [
			async ({ data }) => {
				if (!data.filesize || data.filesize > 5000000) {
					throw new APIError(
						"File size cannot exceed 5MB",
						400,
						undefined,
						true,
					);
				}
			},
		],
	},
};
