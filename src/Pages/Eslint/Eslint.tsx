import { useState } from "react";

const Eslint = () => {
  const [pixels, setPixels] = useState<number>(0);

  const name = "Akash Patil";
  const adjustment = 0;
  let emoji = "😎";

  const totalPixels = pixels + adjustment;

  if (totalPixels == 0) {
    emoji = "😢";
  }

  const addPixels = () => {
    const newPixels = 100;

    setPixels(pixels + newPixels);
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl mb-4">Welcome, {name}!</h1>
      <h2 className="text-2xl text-blue-400 mb-4">
        You have {totalPixels} Pixels {emoji}
      </h2>
      <button
        className="bg-blue-400 text-white rounded p-2 hover:bg-blue-500 cursor-pointer"
        onClick={addPixels}
      >
        Click me!
      </button>
    </div>
  );
};

export default Eslint;
