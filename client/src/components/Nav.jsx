{
  /* Navbar */
}

import { Link } from "react-router";

function Nav() {
  return (
    <>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm text-white">
            ✦
          </div>

          <h1 className="text-xl font-bold">InterviewAI</h1>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-10 text-sm text-gray-600 md:flex">
          <Link to="/home" className="transition hover:text-black">
            Home
          </Link>
          <Link to="/howitworks" className="transition hover:text-black">
            How it works
          </Link>

          <a href="#" className="transition hover:text-black">
            Features
          </a>
        </div>

        <button className="rounded-lg bg-[#11152f] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#252a48]">
          Analyze Interview
        </button>
      </nav>
      ;
    </>
  );
}

export default Nav;
