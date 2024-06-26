import { Link } from "react-router-dom";

function Header() {
  const menu = [
    {
      id: 1,
      name: "HOME",
      path: "/",
    },
    {
      id: 2,
      name: "ABOUT ME",
      path: "/about",
    },
    {
      id: 3,
      name: "SKILLS",
      path: "/skills",
    },
    {
      id: 4,
      name: "PROJECTS",
      path: "/projects",
    },
  ];

  return (
    <div className="h-16 md:h-24 flex items-center w-screen justify-between bg-gradient-to-t from-slate-800 to-slate-900 border-b-2 border-slate-600">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-t from-indigo-900 to-cyan-800 content-center border-r-2 border-slate-600">
        <a href="/">
          <img
            src="./logo.png"
            className="p-2 -mt-1 w-24 hover:scale-110 duration-500 transition-all ease-in-out"
            alt="logo"
          ></img>
        </a>
      </div>
      <div className="flex gap-4 md:flex md:gap-20">
        {menu.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="cursor-pointer hover:underline md:text-xl hover:scale-125 duration-500 transition-all ease-in-out"
          >
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>
      <div className="h-24 bg-gradient-to-t from-slate-800 to-slate-900 content-center border-b-2 border-slate-600"></div>
    </div>
  );
}

export default Header;
