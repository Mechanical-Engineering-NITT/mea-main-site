import { CollectionConfig } from "payload/types";
import { APIError } from "payload/errors";
import { CustomRequest } from "../request";

export const QuestionPapers: CollectionConfig = {
	slug: "question-papers",
	labels: {
		singular: "Question Paper",
		plural: "Question Papers",
	},
	upload: {
		staticURL: `${process.env.PAYLOAD_PUBLIC_BASE_PATH}/media/questionPapers`,
		staticDir: "../media/questionPapers",
		mimeTypes: ["application/pdf"],
	},
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
	access: {
		create: ({ req }) => req.user,
		read: ({ req }: { req: CustomRequest }) =>
			req.user || req.webClientUser,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
