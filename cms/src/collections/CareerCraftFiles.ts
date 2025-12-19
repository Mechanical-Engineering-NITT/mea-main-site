import { CollectionConfig } from "payload/types";
import { APIError } from "payload/errors";

export const CareerCraftFiles: CollectionConfig = {
	slug: "career-craft-files",
	labels: {
		singular: "Career Craft File",
		plural: "Career Craft Files",
	},
	upload: {
		staticURL: `${process.env.PAYLOAD_PUBLIC_BASE_PATH}/media/careerCraftFiles`,
		staticDir: "../media/careerCraftFiles",
	},
	fields: [
		{
			name: "fileName",
			type: "text",
			required: true,
		},
	],
	hooks: {
		beforeValidate: [
			async ({ data }) => {
				if (!data.filesize || data.filesize > 10000000) {
					throw new APIError(
						"File size cannot exceed 10MB",
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
		read: () => true,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
