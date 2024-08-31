"use server";

import { cookies } from "next/headers";

export async function getBooks() {
	const cookieStore = cookies();
	const cookieHeader = cookieStore.toString();
	const response = await fetch("http://localhost:3001/api/books", {
		headers: {
			"Content-Type": "application/json",
			Cookie: cookieHeader,
		},
	});
	const resJSON = await response.json();
	return resJSON;
}
