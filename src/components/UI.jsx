import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { color } from "three/examples/jsm/nodes/Nodes.js";

const pictures = [
  "cvpage1",
  "skills",
  "skills2",
  "Experience1",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
  {
    front: pictures[1],
    back: pictures[2],
  },
  {
    front: pictures[3],
    back: "book-back",
  },
];

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://lessons.wawasensei.dev/courses/react-three-fiber"
        >
          <img className="w-20" src="/images/wawasensei-white.png" alt="Wawa Sensei" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-2 max-w-full p-10">
            {pages.map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 w-20 py-1 rounded-full text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 w-20 py-1 rounded-full text-lg uppercase shrink-0 border ${
                page === pages.length - 1
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length - 1)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none ">
        <div className="relative">
        <div className="bg-white/0 animate-horizontal-scroll flex items-center gap-8 w-max px-8" style={{animation:"horizontal-scroll 40s linear infinite"}}>
          <h1 className="shrink-0 text-white text-10xl font-black">Mounir Hsairi</h1>
          <h2 className="shrink-0 text-white text-8xl italic font-light">Information Systems Engineer</h2>
          <h2 className="shrink-0 text-white text-12xl font-bold">Full Stack Developer</h2>
          <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">Passionate about Web Development</h2>
          <h2 className="shrink-0 text-white text-9xl font-medium">Skills in Java, Angular, and Spring Boot</h2>
          <h2 className="shrink-0 text-white text-9xl font-extralight italic">Experience in Application Development</h2>
          <h2 className="shrink-0 text-white text-13xl font-bold">Ready to take on new challenges</h2>
          <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">Always learning</h2>
          </div>
        </div>
      </div>
    </>
  );
};
