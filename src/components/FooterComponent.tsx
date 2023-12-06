import { FaGithub } from "react-icons/fa";

function FooterComponent() {
  return (
    <div className="w-full bg-primary border-t mt-32">
      <div className="mx-5 md:mx-24 lg:mx-64 flex flex-col-reverse justify-center gap-3 md:flex-row h-28 md:justify-between items-center">
        <div>
          <h1 className="text-sm">&copy; ARRA. | All Right Reserved</h1>
        </div>

        <button className="font-medium border border-secondary p-2 rounded-md flex gap-3 items-center cursor-pointer">
          <FaGithub className="text-lg md:text-2xl" />
          <p className="md:text-lg">Check My Github</p>
        </button>
      </div>
    </div>
  );
}

export default FooterComponent;
