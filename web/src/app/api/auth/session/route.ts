import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/libs/auth";

export async function GET(req: NextRequest) {
	try {
		const session = await auth.api.getSession({ headers: req.headers });
		if (!session) throw new Error("no-sesh");
		return NextResponse.json({ ...session });
	} catch (err) {
		return new Response(null, { status: 204 }); // No Content
	}
}
