import { GlobalConfig } from "payload/types";

export const About: GlobalConfig = {
	slug: "about",
	fields: [
		{
			name: "about",
			type: "textarea",
			maxLength: 500,
			defaultValue: "Edit this text at the CMS website :)",
		},
	],
	access: {
		read: () => true,
		update: ({ req }) => req.user,
	},
};
