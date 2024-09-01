import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
	slug: "users",
	auth: true,
	admin: {
		useAsTitle: "email",
		hidden: ({ user }) => user.role !== "admin",
	},
	fields: [
		{
			name: "role",
			type: "select",
			options: [
				{ label: "Admin", value: "admin" },
				{ label: "MEA", value: "mea" },
			],
			required: true,
		},
	],
	access: {
		create: ({ req }) => req.user && req.user.role === "admin",
		read: ({ req }) => {
			if (!req.user) return false;
			if (req.user.role === "admin") return true;
			return { id: { equals: req.user.id } };
		},
		update: ({ req }) => req.user && req.user.role === "admin",
		delete: ({ req }) => req.user && req.user.role === "admin",
	},
};
