import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Blog, IBlog } from "@/app/api/models/Blog";

// GET all blogs
export async function GET() {
  await dbConnect();

  try {
    const blogs: IBlog[] = await Blog.find({});
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST a new blog
export async function POST(req: Request) {
  await dbConnect();

  try {
    const body: Partial<IBlog> = await req.json();
    const newBlog = await Blog.create(body);
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
