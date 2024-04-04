"use client";
import ServicesComponent from "@/components/servicesComponent/ServicesComponent";
import Image from "next/image";
import services from "@/public/assets/services.jpg";

const page = ({ params }: any) => {
  const service = params.slug;

  return (
    <div className="py-40">
      <div className="relative">
        <h1 className="lg:text-8xl text-4xl text-white pb-3">{service}</h1>
        <Image
          src={services}
          alt="Marketing"
          className="object-cover w-full h-[400px] lg:h-[500px]"
        />
        <div
          className="absolute pure_glass "
          style={{
            position: "absolute",
            top: "95%",
            left: "60%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p className="text-black text-xs md:text-xl lg:text-2xl p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada, nunc nec convallis fermentum, turpis libero ultricies
            libero, nec ultricies felis justo vel velit. Donec malesuada, nunc
            nec convallis fermentum, turpis libero ultricies libero, nec
            ultricies felis justo vel velit.
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="text-6xl text-white pt-40">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-4">
          <div className="bg-white p-5 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white">
            <h1 className="text-2xl">Service 1</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, nunc nec convallis fermentum, turpis libero ultricies
              libero, nec ultricies felis justo vel velit.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white">
            <h1 className="text-2xl">Service 1</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, nunc nec convallis fermentum, turpis libero ultricies
              libero, nec ultricies felis justo vel velit.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white">
            <h1 className="text-2xl">Service 1</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, nunc nec convallis fermentum, turpis libero ultricies
              libero, nec ultricies felis justo vel velit.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white">
            <h1 className="text-2xl">Service 1</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, nunc nec convallis fermentum, turpis libero ultricies
              libero, nec ultricies felis justo vel velit.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white">
            <h1 className="text-2xl">Service 2</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, nunc nec convallis fermentum, turpis libero ultricies
              libero, nec ultricies felis justo vel velit.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white">
            <h1 className="text-2xl">Service 3</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada, nunc nec convallis fermentum, turpis libero ultricies
              libero, nec ultricies felis justo vel velit.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <ServicesComponent />
      </div>
    </div>
  );
};

export default page;
