import { CollectionConfig } from "payload/types";
import { APIError } from "payload/errors";

export const ProceedFiles: CollectionConfig = {
	slug: "proceed-files",
	labels: {
		singular: "Proceed File",
		plural: "Proceed Files",
	},
	upload: {
		staticURL: `${process.env.PAYLOAD_PUBLIC_BASE_PATH}/media/proceedFiles`,
		staticDir: "../media/proceedFiles",
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
