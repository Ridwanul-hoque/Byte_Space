import courses from "@/data/courses.json";
import Courses from "@/Component/Courses_banner";
import CourseList from "./Component/Course";

export default function CoursesPage() {
  return (
    <>
      <Courses />
      <CourseList courses={courses} />
    </>
  );
}