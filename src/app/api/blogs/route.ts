import { NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function GET() {
  try {
    const findBlog = await Backendless.Data.of("Blog").find();
    return NextResponse.json({ message: "Find Blogs Success", data: findBlog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Find Blogs Failed", error }, { status: 500 });
  }
}