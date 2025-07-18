import { Scroll, LandPlot, Eye } from "lucide-react";

const Feature = () => {
  return (
    <div className="w-full max-w-7xl mt-20 bg-[F9F9F] mx-auto  px-4 sm:px-6 md:px-8 ">
      <div className="grid  sm:gap-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          Icon={Scroll}
          title="Our History"
          description="Lorem ipsum dolor sit amet consectetur. Erat dui mauris egestas vit."
          bgColor="#00BBAE"
        />

        <FeatureCard
          Icon={LandPlot}
          title="Our Vision"
          description="Lorem ipsum dolor sit amet consectetur. Erat dui mauris egestas vit."
          bgColor="#FB923C"
        />

        <FeatureCard
          Icon={Eye}
          title="Our Values"
          description="Lorem ipsum dolor sit amet consectetur. Erat dui mauris egestas vit."
          bgColor="#2563EB"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ Icon, title, description, bgColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg flex flex-col md:items-start items-center text-center md:text-left  transition-transform duration-300 group hover:-translate-y-2">
      <div
        className="relative h-[72px] w-[72px]  rounded-full"
        style={{ backgroundColor: bgColor }}
      >
        <Icon className="absolute inset-0 m-auto h-[36px] w-[42px] text-white transition-all duration-500 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0" />

        <Icon className="absolute inset-0 m-auto h-[36px] w-[42px] text-white opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100" />
      </div>

      <h2 className="text-xl md:text-2xl text-[#001430] mt-4 font-semibold text-center md:text-left">
        {title}
      </h2>
      <p className="text-sm md:text-base text-[#69778A] mt-2 text-center md:text-left">
        {description}
      </p>
    </div>
  );
};

export default Feature;
