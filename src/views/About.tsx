import Sidebar from "../components/Sidebar";
import ProfilePicture from "../components/ProfilePicture";
import Education from "../components/Education";
import Experience from "../components/Experience";

export default function About() {
  return (
    <>
      <Sidebar heading="ABOUT" />
      <div className="ml-12 md:ml-32 grid grid-cols-1 md:grid-cols-3 fixed">
        <div className="col-span-2">
          <div className="mt-4 md:mt-6">
            <Education />
          </div>
          <div className="">
            <Experience />
          </div>
        </div>
        <div className="hidden md:block">
          <ProfilePicture />
        </div>
      </div>
    </>
  );
}
