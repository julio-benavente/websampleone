import { Accordion, Button, Link, Typography } from "@/components";
import React from "react";

const FAQSection = () => {
  return (
    <section className="container">
      <div className="max-w-xl">
        <Typography variant="h2">FAQs</Typography>
        <Typography className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          repellat? Odio in non quidem officiis alias! Quisquam unde dolore
          explicabo.
        </Typography>
      </div>

      <div className="mt-8 grid gap-4 lg:hidden">
        <Accordion items={accordionItems} />
      </div>
      <div className="hidden grid-cols-2 items-start gap-4 lg:grid lg:gap-8">
        <div className="mt-8 grid gap-4 ">
          <Accordion
            items={accordionItems.slice(
              0,
              Math.floor(accordionItems.length / 2)
            )}
          />
        </div>
        <div className="mt-8 grid gap-4 ">
          <Accordion
            items={accordionItems.slice(Math.floor(accordionItems.length / 2))}
          />
        </div>
      </div>

      <div className="mt-12">
        <Typography variant="h3" className="text-center">
          Still questions?
        </Typography>
        <Typography className="mt-2 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Typography>

        <div className="m-auto w-fit">
          <Button className="mx-auto mt-4">Contact us</Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

const accordionItems = [
  {
    id: "1",
    question: "Who can become an The Good Doctor patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or{" "}
        <Link href="/" className="link">
          Medigap plans and Medicare-Medicaid
        </Link>{" "}
        Plans.
      </>
    ),
  },
  {
    id: "2",
    question: "Who can become an The Good Doctor patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or{" "}
        <Link href="/" className="link">
          Medigap plans and Medicare-Medicaid
        </Link>{" "}
        Plans.
      </>
    ),
  },
  {
    id: "3",
    question: "Who can become an The Good Doctor patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or{" "}
        <Link href="/" className="link">
          Medigap plans and Medicare-Medicaid
        </Link>{" "}
        Plans.
      </>
    ),
  },
  {
    id: "4",
    question: "Who can become an The Good Doctor patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or{" "}
        <Link href="/" className="link">
          Medigap plans and Medicare-Medicaid
        </Link>{" "}
        Plans.
      </>
    ),
  },

  {
    id: "5",
    question: "Who can become an The Good Doctor patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or{" "}
        <Link href="/" className="link">
          Medigap plans and Medicare-Medicaid
        </Link>{" "}
        Plans.
      </>
    ),
  },
  {
    id: "6",
    question: "Who can become an The Good Doctor patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or{" "}
        <Link href="/" className="link">
          Medigap plans and Medicare-Medicaid
        </Link>{" "}
        Plans.
      </>
    ),
  },

  {
    id: "7",
    question: "Who can become an The Good Doctor patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or{" "}
        <Link href="/" className="link">
          Medigap plans and Medicare-Medicaid
        </Link>{" "}
        Plans.
      </>
    ),
  },
  {
    id: "8",
    question: "Who can become an The Good Doctor patient?",
    answer: (
      <>
        Our doctors specialize caring for anyone with Medicare, including
        Original Medicare Part B, select Medicare Advantage plans, Medicare
        Supplement or{" "}
        <Link href="/" className="link">
          Medigap plans and Medicare-Medicaid
        </Link>{" "}
        Plans.
      </>
    ),
  },
];
