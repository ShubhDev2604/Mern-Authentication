import { Link } from "react-router-dom";
{
  /*div tag is used to make different differnt sections in webpage
className is used to apply css attributes to material inside the tag.*/
}
export default function Header() {
  return (
    <div className="bg-slate-200">
      {" "}
      {/* Makes the division slate color */}
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/*justify set the flex items horizontally ,
      items-center push Auth App to center of header vertically, max-w-6xl sets width between screen and items, max-auto does,
  that to both sides, and p-3 applies padding of 3 size to words.*/}
        <Link to="/">
          {/*Link to add Link to the text in the tag*/}
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          {/*Ul represents unordered list while li represents an item of that unordered list*/}
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
