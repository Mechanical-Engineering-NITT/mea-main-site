"use server";

import { getUser } from "@actions/user";
import { cookies } from "next/headers";
import {
	AboutSchema,
	CoursesSchema,
	HighlightsSchema,
	MiscellaneousSchema,
	QuestionPapersSchema,
	SemestersSchema,
	InitiativesSchema,
	ProjectsSchema,
	GoodToKnowSchema,
	DepartmentsSchema,
	OEOrMinorCoursesSchema,
	OEOrMinorQuestionPapersSchema,
	OEOrMinorMiscSchema,
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
	const response = await fetch(`${CMS_URL}/api/projects?limit=100`);
	const resJSON = await response.json();

	const { data } = ProjectsSchema.safeParse(resJSON.docs);

	return data ?? [];
}

export async function getGoodToKnow() {
	const response = await fetch(`${CMS_URL}/api/globals/good-to-know`);
	const resJSON = await response.json();

	const { data } = GoodToKnowSchema.safeParse(resJSON);

	return data?.GoodToKnowContent_html ?? "";
}

export async function getDepartments() {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(`${CMS_URL}/api/departments`, {
		headers: {
			"Content-Type": "application/json",
			Cookie: cookies().toString(),
		},
	});
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data: departments } = DepartmentsSchema.safeParse(resJSON.docs);

	// Returning data if valid
	return departments ?? [];
}

export async function getOEOrMinorCourses(dept: string, type: "OE" | "Minor") {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(
		`${CMS_URL}/api/oe-or-minor-courses?where[department.shortName][equals]=${dept}&where[category][equals]=${type}`,
		{
			headers: {
				"Content-Type": "application/json",
				Cookie: cookies().toString(),
			},
		},
	);
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data: OECourses } = OEOrMinorCoursesSchema.safeParse(resJSON.docs);

	// Returning data if valid
	return OECourses ?? [];
}

export async function getOEOrMinorQPs(courseCode: string) {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(
		`${CMS_URL}/api/oe-or-minor-qps?where[course.code][equals]=${courseCode}`,
		{
			headers: {
				"Content-Type": "application/json",
				Cookie: cookies().toString(),
			},
		},
	);
	const resJSON = await response.json();

	console.log(resJSON);

	// Validating data fetched from CMS
	const { data: questionPapers } = OEOrMinorQuestionPapersSchema.safeParse(
		resJSON.docs,
	);

	// Returning data if valid
	return questionPapers ?? [];
}

export async function getOEOrMinorMisc(courseCode: string) {
	// Authorization
	const user = await getUser();
	if (!user) return [];

	// Fetching data from CMS
	const response = await fetch(
		`${CMS_URL}/api/oe-or-minor-misc?where[course.code][equals]=${courseCode}`,
		{
			headers: {
				"Content-Type": "application/json",
				Cookie: cookies().toString(),
			},
		},
	);
	const resJSON = await response.json();

	// Validating data fetched from CMS
	const { data: misc } = OEOrMinorMiscSchema.safeParse(resJSON.docs);

	// Returning data if valid
	return misc ?? [];
}
