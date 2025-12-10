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

export const MiscellaneousSchema = z.array(
	z.object({
		description: z.string(),
		link: z.string(),
	}),
);

export const AboutSchema = z.object({
	about: z.string(),
});

export const HighlightsSchema = z.array(
	z.object({
		id: z.string(),
		description: z.string(),
		url: z.string(),
	}),
);

export const InitiativesSchema = z.array(
	z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
	}),
);

export const ProjectsSchema = z.array(
	z.object({
		id: z.string(),
		professor: z.string(),
		emailID: z.string().email(),
		researchInterests: z.string(),
		laboratryOrLocation: z.string().nullable(),
	}),
);

export const GoodToKnowSchema = z.object({
	GoodToKnowContent_html: z.string(),
});
