"use client";
import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import "./styles.scss";

const testimonials = [
  {
    id: 1,
    name: "",
    title: "",
    org: "Frshmoo",
    desc: "Working with Right Hand Venture has been a game-changer for Frshmoo. Their expertise in marketing has significantly boosted our brand visibility and increased our sales. We are impressed by their creativity, dedication, and ability to deliver outstanding results.",
  },
  {
    id: 2,
    name: "",
    title: "",
    org: "Angry Label",
    desc: "Right Hand Venture has been instrumental in elevating Angry Label's market presence. Their innovative strategies and tailored approach have driven remarkable growth in our online engagement and sales. We are thrilled with their results and highly recommend them to any business aiming for success.",
  },
  {
    id: 3,
    name: "",
    title: "",
    org: "Untrain",
    desc: "Right Hand Venture has transformed Untrain's business with their exceptional and innovative marketing strategies, significantly increasing our online presence and conversions. Their personalized approach and commitment to understanding our brand have resulted in a bespoke marketing plan perfectly aligned with our goals.",
  },
  {
    id: 4,
    name: "",
    title: "",
    org: "Animatrix",
    desc: "Right Hand Venture has revolutionized Animatrix’s approach to marketing. Their deep understanding of the streetwear market and innovative strategies have amplified our brand’s reach and engagement. The impressive results speak for themselves, and we couldn't be happier with our partnership",
  },
  {
    id: 5,
    name: "",
    title: "",
    org: "Frshmoo",
    desc: "Working with Right Hand Venture has been a game-changer for Frshmoo. Their expertise in marketing has significantly boosted our brand visibility and increased our sales. We are impressed by their creativity, dedication, and ability to deliver outstanding results.",
  },
];

const FiveCard = () => {
  useEffect(() => {
    const arrowBtns = document.querySelectorAll(".arrow-btn");
    const cardBtns = document.querySelectorAll(".card");
    let currentCard = 2;
    let dir = 1;
    moveCards();

    arrowBtns.forEach((btn, i) => {
      (btn as HTMLElement).onpointerenter = (e) =>
        gsap.to(btn, {
          ease: "expo",
          "box-shadow": "0 3px 4px #00000050",
        });

      (btn as HTMLElement).onpointerleave = (e) =>
        gsap.to(btn, {
          ease: "expo",
          "box-shadow": "0 6px 8px #00000030",
        });

      (btn as HTMLElement).onclick = (e) => {
        dir = i == 0 ? 1 : -1;
        if (i == 0) {
          currentCard--;
          currentCard = Math.max(0, currentCard);
        } else {
          currentCard++;
          currentCard = Math.min(4, currentCard);
        }
        moveCards(0.75);
      };
    });

    cardBtns.forEach((btn, i) => {
      (btn as HTMLElement).onpointerenter = (e) =>
        gsap.to(btn, {
          ease: "power3",
          overwrite: "auto",
          "box-shadow": () =>
            i == currentCard ? "0 6px 11px #00000030" : "0 6px 11px #00000030",
        });

      (btn as HTMLElement).onpointerleave = (e) =>
        gsap.to(btn, {
          ease: "power3",
          overwrite: "auto",
          "box-shadow": () =>
            i == currentCard ? "0 6px 11px #00000030" : "0 0px 0px #00000030",
        });

      (btn as HTMLElement).onclick = (e) => {
        dir = i < currentCard ? 1 : -1;
        currentCard = i;
        moveCards(0.75);
      };
    });

    function moveCards(dur = 0) {
      gsap
        .timeline({
          defaults: {
            duration: dur,
            ease: "power3",
            stagger: { each: -0.03 * dir },
          },
        })
        .to(
          ".card",
          {
            x:
              window.innerWidth <= 600
                ? -290 * currentCard
                : -420 * currentCard,
            y: (i) => (i == currentCard ? 0 : 15),
            height: (i) => (i == currentCard ? 270 : 240),
            ease: "elastic.out(0.4)",
          },
          0
        )
        .to(
          ".card",
          {
            cursor: (i) => (i == currentCard ? "default" : "pointer"),
            "box-shadow": (i: number) =>
              i == currentCard ? "0 6px 11px #00000030" : "0 0px 0px #00000030",
            border: (i) =>
              i == currentCard ? "4px solid #26a" : "0px solid #fff",
            background: (i) =>
              i == currentCard
                ? "radial-gradient(100% 100% at top, #fff 0%, #fff 99%)"
                : "radial-gradient(100% 100% at top, #fff 20%, #eee 175%)",
            ease: "expo",
          },
          0
        )
        .to(
          ".icon h2",
          {
            color: (i) => (i == currentCard ? "#36a" : "transparent"),
          },
          0
        )
        .to(
          ".arrow-btn-prev",
          {
            autoAlpha: currentCard == 0 ? 0 : 1,
          },
          0
        )
        .to(
          ".arrow-btn-next",
          {
            autoAlpha: currentCard == 4 ? 0 : 1,
          },
          0
        )
        .to(
          ".card p",
          {
            y: (i) => (i == currentCard ? 0 : 8),
            opacity: (i) => (i == currentCard ? 1 : 0),
          },
          0
        );
    }
  }, []);

  return (
    <div className="body">
      <div className="cards-wrapper">
        <div className="cards">
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.id}
              className="card card1 p-2 px-3"
              tabIndex={-1}
            >
              <p className="text-sm md:text-base">{testimonial.desc}</p>
              <div className="icon">
                <h2>{testimonial.org}</h2>
              </div>
              <h4>{testimonial.name}</h4>
            </button>
          ))}
        </div>
        <button className="arrow-btn arrow-btn-prev" tabIndex={0}>
          <svg viewBox="0 0 256 512">
            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
          </svg>
        </button>
        <button className="arrow-btn arrow-btn-next" tabIndex={0}>
          <svg viewBox="0 0 256 512">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FiveCard;
