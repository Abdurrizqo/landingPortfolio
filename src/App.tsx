import FooterComponent from "./components/FooterComponent";
import HeroComponent from "./components/HeroComponent";
import NavbarComponent from "./components/NavbarComponent";
import ServiceComponent from "./components/ServiceComponent";
import SideBarComponent from "./components/SideBarComponent";
import useStateActive from "./store/ModalStore";
import { AnimatePresence } from "framer-motion";

function App() {
  const modalState = useStateActive((state) => state.isActive);
  return (
    <>
      <AnimatePresence>
        {modalState && <SideBarComponent />}
      </AnimatePresence>
      <NavbarComponent />
      <HeroComponent />
      <ServiceComponent />
      <FooterComponent />
    </>
  );
}

export default App;
