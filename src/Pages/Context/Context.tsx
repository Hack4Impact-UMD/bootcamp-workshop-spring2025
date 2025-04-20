import List from "./ListComponent/List";

interface ContextProps {
  courses: string[];
}

const Context = ({ courses }: ContextProps) => {
  return (
    <div>
      <p className="p-5">The number of courses is {courses.length}.</p>
    </div>
  );
};

export default Context;
