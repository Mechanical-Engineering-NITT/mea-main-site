import { CollectionConfig } from "payload/types";
import { APIError } from "payload/errors";

export const GoodToKnowFiles: CollectionConfig = {
	slug: "good-to-know-files",
	labels: {
		singular: "Good To Know File",
		plural: "Good To Know Files",
	},
	upload: {
		staticURL: `${process.env.PAYLOAD_PUBLIC_BASE_PATH}/media/goodToKnowFiles`,
		staticDir: "../media/goodToKnowFiles",
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
