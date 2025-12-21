import { GlobalConfig } from "payload/types";
import {
	HTMLConverterFeature,
	lexicalEditor,
	lexicalHTML,
} from "@payloadcms/richtext-lexical";

export const CareerCraft: GlobalConfig = {
	slug: "career-craft",
	fields: [
		{
			name: "CareerCraftContent",
			type: "richText",
			editor: lexicalEditor({
				features: ({ defaultFeatures }) => [
					...defaultFeatures,
					HTMLConverterFeature({}),
				],
			}),
		},
		lexicalHTML("CareerCraftContent", { name: "CareerCraftContent_html" }),
	],
	access: {
		read: () => true,
		update: ({ req }) => req.user,
	},
};
