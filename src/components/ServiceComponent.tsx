import { RiComputerLine } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import ProjectComponent from "./ProjectComponent";

function ServiceComponent() {
  return (
    <div
      className="pt-10 md:pt-16 lg:pt-28 mx-12 md:mx-24 lg:mx-64"
      id="service"
    >
      <h1 className="font-bold text-3xl md:text-3xl text-center text-secondary mb-5 md:mb-10">
        What Can I Do, To Help ?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
        <div className="bg-primary rounded shadow p-4 border w-full">
          <RiComputerLine className="rounded-full bg-secondary w-12 h-12 p-2 text-lg text-white mb-2" />
          <div>
            <h3 className="font-bold text-lg mb-2">Web Development</h3>
            <p className="font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              error asperiores aliquam reprehenderit quidem!
            </p>
          </div>
        </div>

        <div className="bg-primary rounded shadow p-4 border w-full">
          <MdOutlinePhoneAndroid className="rounded-full bg-primary-text w-12 h-12 p-2 text-lg text-white mb-2" />

          <div>
            <h3 className="font-bold text-lg mb-2">Mobile Development</h3>
            <p className="font-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              sequi ratione corrupti sed quod?
            </p>
          </div>
        </div>
      </div>

      <ProjectComponent />
    </div>
  );
}

export default ServiceComponent;
