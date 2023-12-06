import useStateActive from "../store/ModalStore";
import { motion } from "framer-motion";

function SideBarComponent() {
  const changeStateModal = useStateActive((state) => state.changeStateActive);
  const changeSideBar = () => {
    changeStateModal();
  };
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/40"
        onClick={changeSideBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>

      <motion.div
        className="bg-white w-2/5 h-screen fixed z-40 right-0 flex flex-col gap-5 justify-start py-10 px-4 text-secondary font-medium text-lg"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: 100 }}
      >
        <a href="#home" onClick={changeSideBar}>
          Home
        </a>
        <a href="#service" onClick={changeSideBar}>
          Service
        </a>
      </motion.div>
    </>
  );
}

export default SideBarComponent;
