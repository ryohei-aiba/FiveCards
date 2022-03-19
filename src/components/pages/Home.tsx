import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-5xl absolute inset-x-0 top-20">Five Cards</h1>
      <div className="absolute inset-x-0 bottom-20">
        <Link to="/game" className="text-xl">スタート</Link>
        <br />
        <Link to="/rule" className="text-xl">ルール</Link>
      </div>
    </div>
  );
};
