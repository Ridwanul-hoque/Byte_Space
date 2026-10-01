import courses from "@/data/courses.json";
import Courses from "@/Component/Courses_banner";
import CourseList from "@/app/courses/Component/Course";

export default function CoursesPage() {
  return (
    <>
      <Courses />
      <CourseList courses={courses} />
    </>
  );
}