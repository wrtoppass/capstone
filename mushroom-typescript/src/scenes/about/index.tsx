import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { AboutType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./About";

const abouts: Array<AboutType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Labs",
    description:
      "We make sure to have a sterile environment to insure no cross-contamination",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "1000's of Happy Customers",
    description:
      "If our words don't speak wonders. Listen to our customers, check out our social media platforms to see pictures of our customers mushrooms.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert Mycologist",
    description:
      "Our mycologist work tirelessly to bring you the best spores possible and ensure a great flush of mushrooms with every order.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Abouts = ({ setSelectedPage }: Props) => {
  return (
    <section id="abouts" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE ABOUT US</HText>
          <p className="my-5 text-sm">
            We provide expertly crafted bags aka blocks of hardwood substrate. Innocluated with spores that have been
            selected from our biggest harvests. To give you a product that will blossum into delicious and medicinal 
            mushrooms. 
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {abouts.map((about: AboutType) => (
            <About
              key={about.title}
              icon={about.icon}
              title={about.title}
              description={about.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          
          <div>
            
          </div>

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                {/*Motion creates the cool spawn in effect, from framer-motion, great npm install */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    THOUSANDS OF HAPPY CUSTOMERS RECOMMEND OUR{" "}
                    <span className="text-primary-500">MUSHROOMS</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                We guarantee that each of our blocks of innocluated hardwood substrate will produce a nice flush
                of edible mushrooms. 
              </p>
              <p className="mb-5">
                We are so sure of this, that if you don't. We will give you a 100% refund, no questions a 
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Abouts;