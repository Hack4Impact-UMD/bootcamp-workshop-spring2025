import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import List from "./ListComponent/List";

const Callback = () => {
  const [dontClick, setDontClick] = useState<number>(0);
  const [click, setClick] = useState<number>(0);

  const { courses } = useAuth();

  // Doesn't affect the course list
  const handleDontClick = () => {
    setDontClick(dontClick + 1);
  };

  const handleClick = () => {
    setClick(click + 1);
  };

  const getNewCourse = (): string => {
    // Emulates getting some data from the backend
    // reliant on the click count
    return courses[click % courses.length];
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl text-blue-400">New Course!</h1>

      <p className="text-lg text-gray-600 p-3">
        Click this button to add a Course
      </p>

      <button
        className="bg-blue-400 text-white rounded p-2 hover:bg-blue-500 cursor-pointer"
        onClick={handleClick}
      >
        Add Course
      </button>

      <button
        className="bg-red-500 text-white rounded p-2 cursor-pointer ml-2"
        onClick={handleDontClick}
      >
        Don't Click Me👺
      </button>

      <p className="text-lg text-gray-600 mt-5">
        You clicked the don't click button {dontClick} times
      </p>

      <List getNewCourse={getNewCourse} />
    </div>
  );
};

export default Callback;
