import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Books from "./collections/Book";
import Media from "./collections/Media";
import QuestionPapers from "./collections/QuestionPapers";
import Miscellaneous from "./collections/Miscellaneous";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Media, Users, Books, QuestionPapers, Miscellaneous],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: 'mongodb+srv://aditya:adb%40web%40mea@cluster0.dwv8nsm.mongodb.net/mea-main-site?retryWrites=true&w=majority&appName=Cluster0',
  }),
});
