import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Invitation links to join the community will be posted on the 1st and 15th of every month`;
  const items = [
    "Exclusive IT server",
    "Exclusive IT server",
    "Exclusive IT server",
    "Exclusive IT server",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"How to join the server ?"}
          title={"Exclusive"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
          <div class="tache">
      <div class="right"></div>
      <div class="left"></div>
      <div class="eye"></div>
      <div class="leg"></div>
      <div class="leg1"></div>
      <div class="leg2"></div>
      <div class="ear"></div>
    </div>
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>be a memeber</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
               the server is closed temporarily to new members
              </p>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
