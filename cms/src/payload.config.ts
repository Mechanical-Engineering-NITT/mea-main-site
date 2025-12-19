import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";

import { Users } from "./collections/Users";
import { Semesters } from "./collections/Semesters";
import { Courses } from "./collections/Courses";
import { QuestionPapers } from "./collections/QuestionPapers";
import { GoodToKnowFiles } from "./collections/GoodToKnowFiles";
import { Books } from "./collections/Books";
import { Misc } from "./collections/Misc";
import { About } from "./globals/About";
import { GoodToKnow } from "./globals/Good-to-know";
import { Highlights } from "./collections/Highlights";
import { Initiatives } from "./collections/Initiatives";
import { Projects } from "./collections/Projects";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Departments } from "./collections/Departments";
import { OEOrMinorQPs } from "./collections/OEOrMinorQPs";
import { OEOrMinorMisc } from "./collections/OEOrMinorMisc";
import { OEOrMinorCourses } from "./collections/OEOrMinorCourses";
import { Proceed } from "./globals/Proceed";
import { CareerCraft } from "./globals/Career-craft";
import { CareerCraftFiles } from "./collections/CareerCraftFiles";
import { ProceedFiles } from "./collections/ProceedFiles";

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: lexicalEditor({}),
	collections: [
		Users,
		Semesters,
		Courses,
		QuestionPapers,
		GoodToKnowFiles,
		CareerCraftFiles,
		ProceedFiles,
		Books,
		Misc,
		Highlights,
		Initiatives,
		Projects,
		Departments,
		OEOrMinorCourses,
		OEOrMinorQPs,
		OEOrMinorMisc,
	],
	globals: [About, GoodToKnow, CareerCraft, Proceed],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	plugins: [payloadCloud()],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
	routes: {
		admin: `${process.env.PAYLOAD_PUBLIC_BASE_PATH}/admin`,
		api: `${process.env.PAYLOAD_PUBLIC_BASE_PATH}/api`,
	},
	upload: {
		limits: {
			fileSize: 10000000, // 10MB, written in bytes
		},
	},
	serverURL: process.env.PAYLOAD_URL,
});
