import { useState } from "react";
import Logo from "../../assets/hms-logo1.png";
import Dashboard from "../../assets/hms-1.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openMenuHandler = () => {
    setOpen(true);
  };

  const closeMenuHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <section className="flex flex-col items-center text-sm bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-full py-2.5 font-medium text-sm text-white text-center bg-gradient-to-r from-[#4F39F6] to-[#FDFEFF]">
          <p>
            <span className="px-3 py-1 rounded-md text-indigo-600 bg-white mr-2">
              Hello Dear
            </span>
            This is a simple HMS
          </p>
        </div>
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
          <a href="/" className="flex gap-1 items-center">
            <img src={Logo} alt="logo" className="h-10 w-10" />
            <p className="text-black text-lg font-extrabold hover:text-black/90">HMS</p>
          </a>

          <div className="hidden md:flex items-center gap-8 transition duration-500">
            <a href="/" className="hover:text-slate-500 transition">
              Home
            </a>
            <a href="/products" className="hover:text-slate-500 transition">
              Products
            </a>
            <a href="/stories" className="hover:text-slate-500 transition">
              Stories
            </a>
          </div>

          <div className="hidden md:block space-x-3">
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md">
              Get started
            </button>
            <button className="hover:bg-slate-100 transition px-6 py-2 border border-indigo-600 rounded-md">
              Login
            </button>
          </div>
          <button
            onClick={openMenuHandler}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </nav>
        <div
          className={`fixed inset-0 z-[100] bg-white/60 text-slate-800 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/stories">Stories</a>
          <button
            onClick={closeMenuHandler}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <main className="flex flex-col items-center max-md:px-2">
          <a
            href=""
            className="mt-32 flex items-center gap-2 border border-indigo-200 rounded-full p-1 pr-3 text-sm font-medium text-indigo-500 bg-indigo-200/20"
          >
            <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
              NEW
            </span>
            <p className="flex items-center gap-1">
              <span>Book token now </span>
              <svg
                className="mt-1"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 1 4 3.5L1 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </a>

          <h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-4xl text-slate-900">
            The fastest way to book token.
          </h1>
          <p className="text-center text-base text-slate-700 max-w-lg mt-2">
            Our platform helps you to book token in a simple and efficient way.
            With our user-friendly interface, you can easily navigate through
            the booking process and secure your token in no time. Say goodbye to
            long queues and hello to convenience with our token booking
            solution.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 rounded-lg px-7 h-11">
              Get started
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-lg px-8 h-11">
              Blog
            </button>
          </div>

          <img
            src={Dashboard}
            className="w-full rounded-[15px] max-w-4xl mt-16"
            alt="hero section showcase"
          />
        </main>
      </section>
    </>
  );
};
