"use client";

import { Button, Typography } from "@/components";
import AnimationSoftwareImage from "@/../public/assets/images/32164332_animation_software.jpg";
import ImageOne from "@/../public/assets/images/apuesto-joven-electricista-instalando-aire-acondicionado-casa-cliente.jpg";
import ImageTwo from "@/../public/assets/images/expertos-que-trabajan-aire-acondicionado.jpg";
import ImageThree from "@/../public/assets/images/hombre-electricista-reparacion-aire-acondicionado-mantenimiento-aire-acondicionado-atras-tecnico-mecanico-herramientas-ingenieria-reparar-potencia-servicios-aire-acondicionado-maquina-verificar-ventilacion-electrica.jpg";
import ImageFour from "@/../public/assets/images/ingeniero-indio-joven-concentrado-que-instala-acondicionador-aire.jpg";
import ImageSix from "@/../public/assets/images/manos-tecnico-destornillador-al-instalar-aire-acondicionado-dormitorio-cliente.jpg";
import ImageSeven from "@/../public/assets/images/tecnico-aire-acondicionado-desarmando-aire-acondicionado-su-inspeccion.jpg";
import ImageFive from "@/../public/assets/images/tecnico-aire-acondicionado-desarmando-aire-acondicionado-su-inspeccion.jpg";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cn from "@/helpers/cn";
import InfiniteLooper from "./InfiniteLooper";
import { motion, Variants } from "framer-motion";
import { createShowWithStaggerChildren } from "@/helpers/animations";
import standardScroller from "@/helpers/standardScroller";

const MotionTypography = motion(Typography);

const headlinesAnimation = createShowWithStaggerChildren({
  viewport: {
    once: false,
  },
});

const HeroSection = () => {
  return (
    <div
      id="home"
      className={cn(
        "min-h-screen container mt-16 lg:container",
        "lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center lg:py-0"
      )}
    >
      <div>
        <motion.div
          className={cn("max-w-xl", "lg:-mt-[10vh]")}
          {...headlinesAnimation}
        >
          <MotionTypography
            variant="h1"
            className="mb-4 font-black"
            variants={headlinesAnimation.variants}
          >
            Stay cool all year your with our expert AC service
          </MotionTypography>
          <MotionTypography
            variant="body1"
            className="mb-8"
            variants={headlinesAnimation.variants}
          >
            Johnson Refrigeration, Inc. is a family-owned business, founded in
            1977, specializing in the service, design and installation of
            residential, commercial, and industrial heating and air conditioning
            systems.
          </MotionTypography>
          <motion.div
            className="flex flex-col gap-4 xs:flex-row"
            variants={headlinesAnimation.variants}
          >
            <Button
              size="large"
              onClick={() => standardScroller("contact", { duration: 2000 })}
            >
              Contact us
            </Button>
            <Button
              size="large"
              variant="outlined"
              onClick={() => standardScroller("what-we-do")}
            >
              Our services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <ImagesAnimated />
    </div>
  );
};

export default HeroSection;

interface ImagesRowPros {
  variant: "left" | "right";
}

const ImagesAnimated = () => {
  const rowOneImages = [ImageOne, ImageTwo, ImageThree];
  const rowTwoImages = [ImageFour, ImageFive, ImageSix];
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 mt-8 h-[420px]",
        "sm:h-[520px]",
        "md:h-[720px]",
        "lg:mt-auto lg:grid lg:min-h-screen"
      )}
    >
      <InfiniteLooper variant="drop" duration="40s">
        <ImagesRow images={rowOneImages} />
      </InfiniteLooper>
      <InfiniteLooper variant="drop" direction="reverse" duration="40s">
        <ImagesRow images={rowTwoImages} />
      </InfiniteLooper>
    </div>
  );
};

const ImagesRow = (props: { images: Array<string | StaticImageData> }) => {
  return props.images.map((image, i) => {
    return (
      <div className="w-full h-full p-0 m-0 border-none block mb-4" key={i}>
        <Image
          key={i}
          src={image}
          alt=""
          className={cn("object-cover w-full h-full p-0 m-0 border-none block")}
        />
      </div>
    );
  });
};
