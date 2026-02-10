export function About() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <div className="flex max-w-sm mx-auto mt-10 my-4 flex-wrap items-center justify-center p-1 rounded-full bg-white border border-gray-300 text-sm">
        <div className="flex items-center">
          <img
            className="w-7.5 rounded-full border-3 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
            alt="userImage1"
          />
          <img
            className="w-7.5 rounded-full border-3 border-white -translate-x-2"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
            alt="userImage2"
          />
          <img
            className="w-7.5 rounded-full border-3 border-white -translate-x-4"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
            alt="userImage3"
          />
        </div>
        <p className="-translate-x-2">Trusted by 10,000+ people</p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-center mx-auto">
          About our application
        </h1>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
          A visual showcase of our latest hospital management solutions, built
          with precision, usability, and care.
        </p>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
          <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
          <img
            className="max-w-sm w-full rounded-xl h-auto"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-semibold">Our Latest features</h1>
            <p className="text-sm text-slate-500 mt-2">
              Deliver efficient hospital management interfaces with scalable,
              customizable, and reliable UI components designed for healthcare
              systems.
            </p>

            <div className="flex flex-col gap-10 mt-6">
              <div className="flex items-center gap-4">
                <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-600">
                    Lightning-Fast Performance
                  </h3>
                  <p className="text-sm text-slate-500">
                    Built with speed — minimal load times and optimized.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-600">
                    Beautifully Designed Components
                  </h3>
                  <p className="text-sm text-slate-500">
                    Modern, pixel-perfect UI components ready for any project.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-600">
                    Plug-and-Play Integration
                  </h3>
                  <p className="text-sm text-slate-500">
                    Simple setup with support for React, Next.js and Tailwind
                    css.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
