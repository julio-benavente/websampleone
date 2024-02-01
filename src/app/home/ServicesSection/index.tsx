import { Typography } from "@/components";
import { ServiceItem } from "./ServiceItem";
import { StickyWrapper } from "./StickyWrapper";

const ServicesSections = () => {
  return (
    <div className="container lg:grid lg:grid-cols-2 lg:py-0 lg:gap-12">
      <div>
        <StickyWrapper className="h-auto lg:h-screen">
          <div className="max-w-lg justify-self-start lg:py-12">
            <Typography variant="h2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              dolorem.
            </Typography>
            <Typography variant="body1" className="mt-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem voluptatem perferendis magnam? Totam, illum eius, a
              ipsum ullam quos autem doloribus esse quibusdam necessitatibus
              earum ipsam dolores, quo quia amet.
            </Typography>
          </div>
        </StickyWrapper>
      </div>

      {/* <div className="h-40"></div> */}
      <div>
        <ServiceItem className="lg:hidden" />

        <div className="sticky top-0 lg:max-w-lg">
          <StickyWrapper className="hidden lg:grid">
            <ServiceItem />
          </StickyWrapper>

          <StickyWrapper>
            <ServiceItem />
          </StickyWrapper>
          <StickyWrapper>
            <ServiceItem />
          </StickyWrapper>
        </div>
      </div>
    </div>
  );
};

export default ServicesSections;
