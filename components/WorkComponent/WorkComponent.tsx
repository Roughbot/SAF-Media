import Image from "next/image";
import "./workStyles.scss";
import images from "@/public/assets/services.jpg";

const workData = [
  {
    title: "My Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.",
  },
  {
    title: "My Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.",
  },
  {
    title: "My Title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.",
  },
  {
    title: "My Title 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.",
  },
  {
    title: "My Title 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.",
  },
  {
    title: "My Title 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.",
  },
];

const WorkComponent = () => {
  return (
    <div>
      {workData.map((data, index) => (
        <section key={index}>
          <a href="#" className="container">
            <div className="card">
              <div className="content">
                <h3 className="title">{data.title}</h3>

                <div className="text">
                  <p>{data.description}</p>
                </div>
                <span className="text-lg font-bold">^</span>
              </div>
            </div>
            <figure>
              <Image alt="image1" width={300} height={200} src={images} />
            </figure>
          </a>
        </section>
      ))}

      {/* <section>
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
              <span className="text-lg font-bold">^</span>
            </div>
          </div>
          <figure>
            <Image alt="image1" width={300} height={200} src={images} />
          </figure>
        </a>
      </section> */}
    </div>
  );
};

export default WorkComponent;
