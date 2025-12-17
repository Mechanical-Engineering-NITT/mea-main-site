import { CollectionConfig } from "payload/types";
import { APIError } from "payload/errors";
import { CustomRequest } from "../request";

export const OEOrMinorQPs: CollectionConfig = {
	slug: "oe-or-minor-qps",
	labels: {
		singular: "OE or Minor Question Paper",
		plural: "OE or Minor Question Papers",
	},
	upload: {
		staticURL: `${process.env.PAYLOAD_PUBLIC_BASE_PATH}/media/oeOrMinorQPs`,
		staticDir: "../media/oeOrMinorQPs",
		mimeTypes: ["application/pdf"],
	},
	fields: [
		{
			name: "course",
			type: "relationship",
			relationTo: "oe-or-minor-courses",
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
