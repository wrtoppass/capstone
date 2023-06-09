import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/reishi1.png";
import image2 from "@/assets/lionsman2.png";
import image3 from "@/assets/pinkoyster3.png";
import image4 from "@/assets/kingoyster4.png";
import image5 from "@/assets/morel6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Box from "./Box";

const boxes: Array<ClassType> = [
  {
    name: "One Block Box(Random)",
    description:
      "Choosing the one block option gets you 1 bag of organic hardwood substrate. This substrate will be innoculated and ready to spawn when it arrives at your door. The type of mushroom is random, but not to worry! We will also send you a in-depth guide to help you on your mushroom growing journey!",
    image: image1,
  },
  {
    name: "Two Blocks Boxes(Random)",
    description:
      "Choosing the 2 blocks option gets you 2 bag of organic hardwood substrate. This substrate will be innoculated and ready to spawn when it arrives at your door. The types of mushrooms is random, but not to worry! We will also send you a in-depth guide to help you on your mushroom growing journey!",
    image: image2,
  },
  {
    name: "Three Blocks Boxes(Choose 1)",
    description:
      "Choosing the three block option gets you 3 bags of organic hardwood substrate. This substrate will be innoculated and ready to spawn when it arrives at your door. The types of 2 of your mushrooms is random. With this offer, we will let you pick out a mushroom of your choosing. We will also send you a in-depth guide to help you on your mushroom growing journey!",
    image: image3,
  },
  {
    name: "Five Blocks Box(Choose All)",
    description:
      "With our five block offer you will receive 5 blocks of hardwood substrate innoculated with any mushroom you want. We will also include all the guides for the mushrooms of your choosing. ",
    image: image4,
  },
  {
    name: "Ten Blocks Box(Choose All)",
    description:
      "For a limited time we are offering the ten block deal! With this monthly subscription you will receive 10 blocks of innoculated hardwood substrate. You will be able to pick and choose what you want each block innoculated with. You will also be given growing guides for each different type of mushroom you choose! ",
    image: image5,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurBoxes = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourboxes" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurBoxes)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR BOXES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {boxes.map((item: ClassType, index) => (
              <Box
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurBoxes;