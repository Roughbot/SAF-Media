import WorkComponent from "@/components/WorkComponent/WorkComponent";
import Image from "next/image";
import images from "@/public/assets/services.jpg";

const page = () => {
  return (
    <div className="bg-black">
      <div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-center font-bold text-blue-700 pt-20">
          <span>Our Works</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row py-3">
        <div className="flex items-center justify-center ">
          <p className="text-white text-2xl p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus ut turpis tincidunt. Nulla facilisi. Donec euismod, nisl et
            luctus aliquet, nisi tortor ultricies purus, a ultricies ex nunc id
            eros. Nullam nec purus ut turpis tincidunt. Nulla facilisi. Donec
            euismod, nisl et luctus aliquet, nisi tortor ultricies purus, a
            ultricies ex nunc id eros.
          </p>
        </div>
        <div>
          <Image alt="image" src={images} />
        </div>
      </div>
      <div>
        <WorkComponent />
      </div>
    </div>
  );
};

export default page;
