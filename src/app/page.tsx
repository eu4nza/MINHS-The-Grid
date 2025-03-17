import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function home() {
  return (
    <main className="w-full h-full">
      {/* Home Section */}
      <section
        id="home"
        className="w-full h-screen bg-cover bg-center md:bg-cover md:bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant1_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-20 px-6 md:pt-32 md:px-20">
          <p className="text-5xl md:text-8xl text-white font-bold">The GRID</p>
          <p className="text-xl md:text-3xl text-black ">
            Guidelines for Research and Investigative Data
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full h-screen bg-cover bg-center md:bg-cover md:bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant2_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="pt-20 px-6 md:pt-32 md:px-20 w-full flex justify-end">
          <div className="max-w-2xl">
            <p className="text-5xl md:text-8xl text-white font-bold">
              The GRID
            </p>
            <p className="text-xl md:text-3xl text-black">
              Guidelines for Research and Investigative Data
            </p>
            <p className="text-base md:text-xl text-white text-justify pt-4">
              Developed in 2023, GRID is a structured framework designed to
              assist students and teachers in conducting effective research. It
              provides essential principles to ensure accuracy, credibility, and
              ethical integrity as aligned with the mandate of the Department of
              Education in strengthening research and innovation among academic
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="w-full h-screen bg-cover bg-center md:bg-cover md:bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant1_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.50)",
        }}
      >
        <p className="pt-20 px-6 text-3xl md:pt-32 md:px-20 md:text-6xl text-black font-bold">
          The Project Proponents
        </p>
        <div className="gap-10 py-10 md:gap-40 md:pt-10 flex flex-col md:flex-row justify-center">
          <div className="gap-5 md:gap-10 flex flex-col items-center">
            <div className="w-[150px] md:w-[250px]">
              <Image
                src="/assets/team/Christianne_Roie_A._Carabeo.webp"
                alt="Christianne Roie A. Carabeo"
                width={250}
                height={250}
                className="w-full h-auto"
              />
            </div>
            <p className="text-base md:text-lg bg-black px-5 py-2 text-white font-bold text-center">
              Christianne Roie A. Carabeo, MACDDS
              <br />
              Research Coordinator
            </p>
          </div>
          <div className="gap-5 md:gap-10 flex flex-col items-center">
            <div className="w-[150px] md:w-[250px]">
              <Image
                src="/assets/team/Ivy_Filipina_R._Toledo.webp"
                alt="Christianne Roie A. Carabeo"
                width={250}
                height={250}
                className="w-full h-auto"
              />
            </div>
            <p className="text-base md:text-lg bg-black px-5 py-2 text-white font-bold text-center">
              Ivy Filipina R. Toledo, MBA
              <br />
              Entrepreneurship Coordinator
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/background/variant1_bg.webp')",
          backgroundColor: "rgba(0, 0, 0, 0.50)", // Transparent overlay
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="pt-20 px-6 md:pt-32 md:px-20">
          <p className="text-3xl flex justify-center md:text-6xl md:justify-end text-white font-bold">
            Research Guides and Documents
          </p>
        </div>

        <div className="flex flex-col pt-20 gap-30 md:flex-row md:pt-40 md:gap-20 justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="default"
                className="hover:bg-gray-200 px-16 py-12 text-xl font-bold bg-white cursor-pointer"
              >
                Teacher's Guide
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-white px-4 py-4">
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-gray-200 text-xl px-20 bg-white cursor-pointer transition-all duration-200 ease-in-out">
                    Basic
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-white border-white px-4 py-4">
                      <DropdownMenuItem>
                        <Link
                          href="/basic-research-proposal-template"
                          className="hover:bg-gray-200 text-lg px-6 rounded bg-white cursor-pointer transition-all duration-200 ease-in-out"
                        >
                          Proposal Template
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/completed-basic-research-template"
                          className="hover:bg-gray-200 text-lg px-6 rounded bg-white cursor-pointer transition-all duration-200 ease-in-out"
                        >
                          Full Paper Template
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-gray-200 text-xl px-20 bg-white cursor-pointer transition-all duration-200 ease-in-out">
                    Action
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-white border-white px-4 py-4">
                      <DropdownMenuItem>
                        <Link
                          href="/action-research-proposal-template"
                          className="hover:bg-gray-200 text-lg px-6 rounded bg-white cursor-pointer transition-all duration-200 ease-in-out"
                        >
                          Proposal Template
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/completed-action-research-template"
                          className="hover:bg-gray-200 text-lg px-6 rounded bg-white cursor-pointer transition-all duration-200 ease-in-out"
                        >
                          Full Paper Template
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="default"
                className="hover:bg-gray-200 px-16 py-12 text-xl font-bold bg-white cursor-pointer"
              >
                Student's Guide
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-white px-4 py-4">
              <DropdownMenuItem
                className="hover:bg-gray-200 text-xl px-16 bg-white cursor-pointer transition-all duration-200 ease-in-out"
                asChild
              >
                <Link href="/qualitative">Qualitative</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-gray-200 text-xl px-16 bg-white cursor-pointer transition-all duration-200 ease-in-out"
                asChild
              >
                <Link href="/quantitative">Quantitative</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-gray-200 text-xl px-16 bg-white cursor-pointer transition-all duration-200 ease-in-out"
                asChild
              >
                <Link href="/business-plan">Business Plan</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="default"
            className="hover:bg-gray-200 w-70 py-12 text-xl font-bold bg-white cursor-pointer"
            asChild
          >
            <p>Documents</p>
            {/* <Link href="/documents">Documents</Link>*/}
          </Button>
        </div>
      </section>
    </main>
  );
}
