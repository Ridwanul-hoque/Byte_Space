import { notFound } from "next/navigation";
import courses from "@/data/courses.json"; 
import CourseDetails from "../Component/CourseDetail"

export function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export default async function CoursePage({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) notFound();
  return <CourseDetails course={course} />;
}



































