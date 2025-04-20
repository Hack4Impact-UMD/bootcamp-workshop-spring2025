import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="text-center p-5">
      <img src={logo} alt="logo" className="mx-auto p-10" />
      <h1 className="text-4xl text-blue-400">Bootcamp Workshop</h1>
      <h3 className="text-xl text-gray-600 mt-2">Topics</h3>
      <ul className="list-none">
        <li className="my-2">
          <a href="/callback" className="text-blue-400 hover:underline">
            Callback
          </a>
        </li>
        <li className="my-2">
          <a href="/context" className="text-blue-400 hover:underline">
            Context
          </a>
        </li>
        <li className="my-2">
          <a href="/ref" className="text-blue-400 hover:underline">
            Ref
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
