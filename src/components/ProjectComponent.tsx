import { BsLink45Deg } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProjectComponent() {
  return (
    <Swiper
      className="mt-10"
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
      }}
    >
      <SwiperSlide className="bg-gray-300 rounded w-full grid grid-cols-1 border drop-shadow cursor-grab">
        <div className="bg-cover h-64 bg-center w-full overflow-hidden">
          <img
            className="rounded-t w-full h-full"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full rounded-b gap-2 p-4 bg-primary">
          <p className="text-lg text-secondary font-bold">Project 1</p>

          <div className="flex gap-3 mt-2">
            <div className="text-primary-text">#Express JS</div>
            <div className="text-primary-text">#React JS</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <FaGithub />
              Repository
            </div>

            <div className="flex gap-2 items-center">
              <BsLink45Deg />
              Visit
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-gray-300 rounded w-full grid grid-cols-1 border drop-shadow cursor-grab">
        <div className="bg-cover h-64 bg-center w-full overflow-hidden">
          <img
            className="rounded-t w-full h-full"
            src="https://images.unsplash.com/photo-1701221238491-d5247ff7abcc?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full rounded-b gap-2 p-4 bg-primary">
          <p className="text-lg text-secondary font-bold">Project 1</p>

          <div className="flex gap-3 mt-2">
            <div className="text-primary-text">#Express JS</div>
            <div className="text-primary-text">#React JS</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <FaGithub />
              Repository
            </div>

            <div className="flex gap-2 items-center">
              <BsLink45Deg />
              Visit
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-gray-300 rounded w-full grid grid-cols-1 border drop-shadow cursor-grab">
        <div className="bg-cover h-64 bg-center w-full overflow-hidden">
          <img
            className="rounded-t w-full h-full"
            src="https://images.unsplash.com/photo-1701342802818-c269af396819?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full rounded-b gap-2 p-4 bg-primary">
          <p className="text-lg text-secondary font-bold">Project 1</p>

          <div className="flex gap-3 mt-2">
            <div className="text-primary-text">#Express JS</div>
            <div className="text-primary-text">#React JS</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <FaGithub />
              Repository
            </div>

            <div className="flex gap-2 items-center">
              <BsLink45Deg />
              Visit
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-gray-300 rounded w-full grid grid-cols-1 border drop-shadow cursor-grab">
        <div className="bg-cover h-64 bg-center w-full overflow-hidden">
          <img
            className="rounded-t w-full h-full"
            src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full rounded-b gap-2 p-4 bg-primary">
          <p className="text-lg text-secondary font-bold">Project 1</p>

          <div className="flex gap-3 mt-2">
            <div className="text-primary-text">#Express JS</div>
            <div className="text-primary-text">#React JS</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <FaGithub />
              Repository
            </div>

            <div className="flex gap-2 items-center">
              <BsLink45Deg />
              Visit
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-gray-300 rounded w-full grid grid-cols-1 border drop-shadow cursor-grab">
        <div className="bg-cover h-64 bg-center w-full overflow-hidden">
          <img
            className="rounded-t w-full h-full"
            src="https://images.unsplash.com/photo-1701221238491-d5247ff7abcc?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full rounded-b gap-2 p-4 bg-primary">
          <p className="text-lg text-secondary font-bold">Project 1</p>

          <div className="flex gap-3 mt-2">
            <div className="text-primary-text">#Express JS</div>
            <div className="text-primary-text">#React JS</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <FaGithub />
              Repository
            </div>

            <div className="flex gap-2 items-center">
              <BsLink45Deg />
              Visit
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-gray-300 rounded w-full grid grid-cols-1 border drop-shadow cursor-grab">
        <div className="bg-cover h-64 bg-center w-full overflow-hidden">
          <img
            className="rounded-t w-full h-full"
            src="https://images.unsplash.com/photo-1682687981603-ae874bf432f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full rounded-b gap-2 p-4 bg-primary">
          <p className="text-lg text-secondary font-bold">Project 1</p>

          <div className="flex gap-3 mt-2">
            <div className="text-primary-text">#Express JS</div>
            <div className="text-primary-text">#React JS</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <FaGithub />
              Repository
            </div>

            <div className="flex gap-2 items-center">
              <BsLink45Deg />
              Visit
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default ProjectComponent;
