"use server";

import { getUser } from "@actions/user";
import { cookies } from "next/headers";
import {
	CoursesSchema,
	QuestionPapersSchema,
	SemestersSchema,
} from "./schemas";

export async function getSemesters() {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(
		"http://localhost:3001/api/semesters?sort=semester",
		{
			headers: {
				"Content-Type": "application/json",
				Cookie: cookies().toString(),
			},
		},
	);
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
		`http://localhost:3001/api/courses?where[semester.semester][equals]=${semester}`,
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
		`http://localhost:3001/api/question-papers?where[course.code][equals]=${courseCode}`,
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
