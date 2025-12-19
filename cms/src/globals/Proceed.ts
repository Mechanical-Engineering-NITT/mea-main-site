import { GlobalConfig } from "payload/types";
import {
	HTMLConverterFeature,
	lexicalEditor,
	lexicalHTML,
} from "@payloadcms/richtext-lexical";

export const Proceed: GlobalConfig = {
	slug: "proceed",
	fields: [
		{
			name: "ProceedContent",
			type: "richText",
			editor: lexicalEditor({
				features: ({ defaultFeatures }) => [
					...defaultFeatures,
					HTMLConverterFeature({}),
				],
			}),
		},
		lexicalHTML("ProceedContent", { name: "ProceedContent_html" }),
	],
	access: {
		read: () => true,
		update: ({ req }) => req.user,
	},
};
