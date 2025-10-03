"use server";

import { getUser } from "@actions/user";
import { cookies } from "next/headers";
import {
	AboutSchema,
	BooksSchema,
	CoursesSchema,
	HighlightsSchema,
	MiscellaneousSchema,
	QuestionPapersSchema,
	SemestersSchema,
	InitiativesSchema,
	ProjectsSchema,
} from "./schemas";
import { CMS_URL } from "@/utils/config";

export async function getSemesters() {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(`${CMS_URL}/api/semesters?sort=semester`, {
		headers: {
			"Content-Type": "application/json",
			Cookie: cookies().toString(),
		},
	});
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data: semesters } = SemestersSchema.safeParse(resJSON.docs);

	// Returning data if valid
	return semesters ?? [];
}

export async function getCourses(semester: string) {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(
		`${CMS_URL}/api/courses?where[semester.semester][equals]=${semester}`,
		{
			headers: {
				"Content-Type": "application/json",
				Cookie: cookies().toString(),
			},
		},
	);
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data: courses } = CoursesSchema.safeParse(resJSON.docs);

	// Returning data if valid
	return courses ?? [];
}

export async function getQuestionPapers(courseCode: string) {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(
		`${CMS_URL}/api/question-papers?where[course.code][equals]=${courseCode}`,
		{
			headers: {
				"Content-Type": "application/json",
				Cookie: cookies().toString(),
			},
		},
	);
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data: questionPapers } = QuestionPapersSchema.safeParse(
		resJSON.docs,
	);

	// Returning data if valid
	return questionPapers ?? [];
}

export async function getBooks(courseCode: string) {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(
		`${CMS_URL}/api/books?where[course.code][equals]=${courseCode}`,
		{
			headers: {
				"Content-Type": "application/json",
				Cookie: cookies().toString(),
			},
		},
	);
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data: books } = BooksSchema.safeParse(resJSON.docs);

	// Returning data if valid
	return books ?? [];
}

export async function getMiscellaneous(courseCode: string) {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(
		`${CMS_URL}/api/miscellaneous?where[course.code][equals]=${courseCode}`,
		{
			headers: {
				"Content-Type": "application/json",
				Cookie: cookies().toString(),
			},
		},
	);
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data: miscellaneous } = MiscellaneousSchema.safeParse(resJSON.docs);

	// Returning data if valid
	return miscellaneous ?? [];
}

export async function getAbout() {
	// Fetching data from CMS
	const response = await fetch(`${CMS_URL}/api/globals/about`);
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data } = AboutSchema.safeParse(resJSON);

	// Returning data if valid
	return data?.about ?? "";
}

export async function getHighlights() {
	// Fetching data from CMS
	const response = await fetch(`${CMS_URL}/api/highlights`);
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data } = HighlightsSchema.safeParse(resJSON.docs);

	// Returning data if valid
	return data ?? [];
}

export async function getInitiatives() {
	const response = await fetch(`${CMS_URL}/api/initiatives`);
	const resJSON = await response.json();

	const { data } = InitiativesSchema.safeParse(resJSON.docs);

	// Returning data if valid
	return data ?? [];
}

export async function getProjects() {
	const response = await fetch(`${CMS_URL}/api/projects`);
	const resJSON = await response.json();

	const { data } = ProjectsSchema.safeParse(resJSON.docs);

	return data ?? [];
}
