import { GlobalConfig } from "payload/types";
import {
	HTMLConverterFeature,
	lexicalEditor,
	lexicalHTML,
} from "@payloadcms/richtext-lexical";

export const GoodToKnow: GlobalConfig = {
	slug: "good-to-know",
	fields: [
		{
			name: "GoodToKnowContent",
			type: "richText",
			editor: lexicalEditor({
				features: ({ defaultFeatures }) => [
					...defaultFeatures,
					HTMLConverterFeature({}),
				],
			}),
		},
		lexicalHTML("GoodToKnowContent", { name: "GoodToKnowContent_html" }),
	],
	access: {
		read: () => true,
		update: ({ req }) => req.user,
	},
};
