import { NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params; // Ambil slug (objectId) dari URL
    const blog = await Backendless.Data.of("Blog").findById(slug);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch blog", error }, { status: 500 });
  }
}