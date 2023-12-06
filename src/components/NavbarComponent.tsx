import { CiMenuFries } from "react-icons/ci";
import useStateActive from "../store/ModalStore";

function NavbarComponent() {
  const changeStateModal = useStateActive((state) => state.changeStateActive);
  const changeSideBar = () => {
    changeStateModal();
  };
  return (
    <div className="w-full h-20 flex md:flex-row justify-between items-center gap-20 fixed bg-primary px-10 md:px-20 lg:px-60 border-b shadow-sm z-20">
      <h1 className="text-secondary font-black text-xl">ARRA.</h1>
      <CiMenuFries
        className="md:hidden text-xl text-secondary font-bold cursor-pointer"
        onClick={changeSideBar}
      />

      <div className="hidden md:flex gap-12 text-secondary font-medium text-lg">
        <div className="relative w-12">
          <a
            href="#home"
            className="after:w-2/3 after:h-1 after:rounded-full after:bg-secondary after:absolute after:opacity-0 hover:after:left-3 hover:after:opacity-100"
          >
            Home
          </a>
        </div>

        <div className="relative w-12">
          <a
            href="#service"
            className="after:w-2/3 after:h-1 after:rounded-full after:bg-secondary after:absolute after:opacity-0 hover:after:left-4 hover:after:opacity-100"
          >
            Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
