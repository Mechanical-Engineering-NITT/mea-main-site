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
		laboratryOrLocation: z.string().nullable().optional(),
	}),
);

export const GoodToKnowSchema = z.object({
	GoodToKnowContent_html: z.string(),
});

export const ProceedSchema = z.object({
	ProceedContent_html: z.string(),
});

export const CareerCraftSchema = z.object({
	CareerCraftContent_html: z.string(),
});

export const DepartmentsSchema = z.array(
	z.object({
		name: z.string(),
		shortName: z.string(),
	}),
);

export const OEOrMinorCoursesSchema = z.array(
	z.object({
		code: z.string(),
		name: z.string(),
		category: z.union([z.literal("OE"), z.literal("Minor")]),
	}),
);

export const OEOrMinorQuestionPapersSchema = z.array(
	z.object({
		url: z.string(),
		year: z.string(),
		filename: z.string(),
	}),
);

export const OEOrMinorMiscSchema = z.array(
	z.object({
		description: z.string(),
		link: z.string(),
	}),
);
