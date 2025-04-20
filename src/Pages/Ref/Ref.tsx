import { useState } from "react";

const Ref = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    alert("I just stole all ur pixels 😎");
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl text-blue-400">100000 Free Pixels</h1>
      <p className="text-lg text-gray-600">Please enter in your credentials!</p>

      <form className="mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 rounded p-2 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="bg-blue-400 text-white rounded p-2 hover:bg-blue-500 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Ref;
