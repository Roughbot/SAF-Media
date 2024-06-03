"use client";
import Modal from "react-modal";
import React, { useState } from "react";
import "./workStyles.scss";
import sampleImage from "../../public/assets/services.jpg";
import Image from "next/image";

const workData = [
  {
    title: "My Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. DonecLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec",
    video: "AwclCGUMrTY",
  },
  {
    title: "My Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. DonecLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec",
    video: "hJDwkDjCld8",
  },
  {
    title: "My Title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. DonecLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec",
    video: "DLRUn4DAvdQ",
  },
  {
    title: "My Title 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. DonecLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ut dolor non aliquam. Donec",
    video: "7KG_R-i432I",
  },
];

const WorkComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {workData.map((data, index) => (
        <section key={index}>
          <a href="#" className="container">
            <div className="card text-black">
              <div className="content">
                <h3 className="title">{data.title}</h3>

                <div className="text">
                  <p>{data.description}</p>
                </div>
                <span className="text-lg font-bold">^</span>
              </div>
            </div>
            <figure onClick={openModal}>
              <Image alt="image1" width={300} height={200} src={sampleImage} />
            </figure>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="My dialog"
              style={{
                overlay: {
                  backgroundColor: "rgba(0,0,0,0.5)",
                },
                content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "transparent",
                },
              }}
            >
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${data.video}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Modal>
          </a>
        </section>
      ))}
    </div>
  );
};


export default WorkComponent;
