import AnimationSoftwareImage from "@/../public/assets/images/32164332_animation_software.jpg";
import RepairServiceImage from "@/../public/assets/images/repair-service.jpg";
import InstallationServiceImage from "@/../public/assets/images/installation-service.jpg";
import MaintanceServiceImage from "@/../public/assets/images/maintance-service.jpg";
import { StaticImageData } from "next/image";

const servicesData: {
  title: string;
  description: string;
  image: StaticImageData | string;
}[] = [
  {
    title: "Maintenance",
    description:
      "With the extremely hot summers we have here in the Phoenix area, it's absolutely crucial that your A/C is working perfectly to ensure you remain comfortable in your home or business. Whether you need a new unit installation, urgent repairs, or ongoing maintenance, we're here to help.",
    image: MaintanceServiceImage,
  },
  {
    title: "Repair",
    description:
      "While the Phoenix area does generally experience mild winters, temperatures can get below freezing during certain times of the year. We can ensure that your heating system is working properly to keep you comfortable in the Winter. Contact us if you need a new system installation, repair, or to schedule routine maintenance. ",
    image: RepairServiceImage,
  },
  {
    title: "Installation/Replace",
    description:
      "When in the market for a replacement unit or an add on. We can ensure you we will have the most competitive prices for  the industry's top brands.",
    image: InstallationServiceImage,
  },
];

export default servicesData;
