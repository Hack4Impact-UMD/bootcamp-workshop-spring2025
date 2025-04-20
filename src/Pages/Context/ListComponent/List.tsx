interface ListProps {
  courses: string[];
}

const List = ({ courses }: ListProps) => {
  return (
    <div className="p-5">
      <h1 className="text-xl text-gray-600 mt-2">Course List:</h1>
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
