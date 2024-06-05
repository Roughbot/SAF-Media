"use client";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import "./workStyles.scss";
import sampleImage from "../../public/assets/services.jpg";
import Image from "next/image";
import workData from "./data";
import useDeviceDetect from "@/utils/useDeviceDetect";

const WorkComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [appElement, setAppElement] = useState<HTMLElement | null>(null);
  const [currentVideo, setCurrentVideo] = useState("");
  const [modelDescriptionOpen, setModelDescriptionOpen] = useState(false);
  const { isMobile } = useDeviceDetect();
  const [caseStudy, setCaseStudy] = useState<any>(null);

  useEffect(() => {
    setAppElement(document.getElementById("workComponent") as HTMLElement);
  }, []);

  const openModal = (videoId: string) => {
    setCurrentVideo(videoId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const redirectToYoutube = (videoId: any) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  const openDescriptionModel = (caseStudy: any) => {
    document.body.style.overflow = "hidden";
    setCaseStudy(caseStudy);
    setModelDescriptionOpen(true);
  };

  const closeDescriptionModel = () => {
    document.body.style.overflow = "auto";
    setModelDescriptionOpen(false);
  };
  return (
    <div>
      {workData.map((data, index) => (
        <section key={index}>
          <a className="container">
            <div className="card text-black">
              <div className="content">
                <h3 className="title">{data.title}</h3>

                <div className="text">
                  <p>{data.description}</p>
                  <span
                    className="text-black font-semibold items-center justify-center flex cursor-pointer"
                    onClick={() => {
                      openDescriptionModel(data.caseStudy);
                    }}
                  >
                    More{" "}
                  </span>
                  <Modal
                    isOpen={modelDescriptionOpen}
                    appElement={appElement!}
                    onRequestClose={closeDescriptionModel}
                    contentLabel=""
                    style={{
                      overlay: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                      },
                      content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        width: "80%",

                        transform: "translate(-50%, -50%)",
                        backgroundColor: "White",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                    }}
                  >
                    <div
                      className={
                        isMobile
                          ? "h-[600px] w-[300px] textSize"
                          : "h-[400px] w-[900px]"
                      }
                    >
                      {caseStudy}
                    </div>
                  </Modal>
                </div>
                <span className="text-lg font-bold">^</span>
              </div>
            </div>
            <figure
              onClick={() => {
                isMobile
                  ? redirectToYoutube(data.video)
                  : openModal(data.video);
              }}
            >
              <Image alt="image1" width={300} height={200} src={sampleImage} />
            </figure>
            <Modal
              isOpen={modalIsOpen}
              appElement={appElement!}
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
                src={`https://www.youtube.com/embed/${currentVideo}`}
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
