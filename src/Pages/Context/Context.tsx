import List from "./ListComponent/List";

interface ContextProps {
  courses: string[];
}

const Context = ({ courses }: ContextProps) => {
  return (
    <div className="text-center p-10">
      <p className="p-2">The number of courses is ?</p>
    </div>
  );
};

export default Context;
