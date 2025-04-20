import { useEffect, useState } from "react";

interface ListProps {
  getNewCourse: () => string;
}

const List = ({ getNewCourse }: ListProps) => {
  const [courses, setCourses] = useState<string[]>(["CMSC351"]);

  useEffect(() => {
    setCourses((prevCourses) => [...prevCourses, getNewCourse()]);
  }, [getNewCourse]);

  return (
    <div className="p-3">
      <h1 className="text-xl text-gray-600">Course List:</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index} className="text-blue-400">
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
