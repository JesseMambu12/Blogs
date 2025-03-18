import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Backendless from "@/lib/backendless";

export async function GET(req: NextRequest) {
  try {
    // Ambil slug dari URL request
    const url = new URL(req.url);
    const slug = url.pathname.split("/").pop(); // Ambil bagian terakhir dari path

    if (!slug) {
      return NextResponse.json({ message: "Slug is required" }, { status: 400 });
    }

    const blog = await Backendless.Data.of("Blog").findById(slug);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blog", error: String(error) },
      { status: 500 }
    );
  }
}
