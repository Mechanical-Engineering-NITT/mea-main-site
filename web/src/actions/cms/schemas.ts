import { z } from "zod";

export const SemestersSchema = z.array(
	z.object({
		semester: z.number(),
	}),
);

export const CoursesSchema = z.array(
	z.object({
		code: z.string(),
		name: z.string(),
		semester: z.object({
			semester: z.number(),
		}),
	}),
);

export const QuestionPapersSchema = z.array(
	z.object({
		url: z.string(),
		year: z.string(),
		filename: z.string(),
	}),
);

export const BooksSchema = z.array(
	z.object({
		name: z.string(),
		link: z.string(),
	}),
);

export const MiscellaneousSchema = z.array(
	z.object({
		description: z.string(),
		link: z.string(),
	}),
);
