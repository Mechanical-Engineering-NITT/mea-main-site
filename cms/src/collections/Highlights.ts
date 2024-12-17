import { APIError } from "payload/errors";
import { CollectionConfig } from "payload/types";

export const Highlights: CollectionConfig = {
	slug: "highlights",
	upload: {
		staticURL: `${process.env.PAYLOAD_PUBLIC_BASE_PATH}/media/highlights`,
		staticDir: "../media/highlights",
		mimeTypes: ["image/jpeg", "image/png"],
	},
	fields: [
		{
			name: "description",
			type: "textarea",
			required: true,
			maxLength: 500,
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
		read: () => true,
		update: ({ req }) => req.user,
		delete: ({ req }) => req.user,
	},
};
