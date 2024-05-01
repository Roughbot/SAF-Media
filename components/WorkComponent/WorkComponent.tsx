import Image from "next/image";
import "./workStyles.scss";
import images from "@/public/assets/services.jpg";

const WorkComponent = () => {
  return (
    <div>
      <section>
        <a href="#" className="container">
          <div className="card">
            <div className="content">
              <h3 className="title">A Great Title</h3>

              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tristique ut dolor non aliquam. Donec.
                </p>
              </div>
              <span className="text-2xl font-bold">^</span>
            </div>
          </div>
          <figure>
            <Image alt="image1" width={300} height={200} src={images} />
          </figure>
        </a>
      </section>
    </div>
  );
};

export default WorkComponent;
