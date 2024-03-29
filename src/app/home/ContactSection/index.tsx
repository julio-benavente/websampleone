"use client";

import {
  Button,
  InputWrapper,
  TextArea,
  TextField,
  Typography,
} from "@/components";
import React from "react";
import { Mail, Phone, LocationCity } from "@mui/icons-material";
import { InputLabel } from "@mui/material";
import { motion } from "framer-motion";
import { createShowWhileInViewAnimation } from "@/helpers/animations";

const animation = createShowWhileInViewAnimation();

const ContactSection = () => {
  return (
    <motion.section className="container" {...animation} id="contact">
      <div className="grid lg:grid-cols-2 lg:gap-x-20">
        <div className="max-w-xl">
          <Typography variant="h2">Contact us</Typography>
          <Typography className="mt-2">
            Connect with us! In our Contact Us section, you&lsquo;ll find all
            the information you need to reach our team. Don&lsquo;t hesitate to
            get in touch - we&lsquo;re here to assist you with all your HVAC
            needs!
          </Typography>

          <div className="grid gap-y-2 mt-8">
            {[
              {
                icon: Mail,
                value: "hello@jriac.com",
              },
              {
                icon: Phone,
                value: "1-762-756-3340",
              },
              {
                icon: LocationCity,
                value: "229 Hodkiewicz Ports, New Jenatown, MI",
              },
            ].map((e, i) => {
              return (
                <div key={i} className="grid grid-cols-[40px_1fr]">
                  <e.icon className="mt-1" /> <Typography>{e.value}</Typography>
                </div>
              );
            })}
          </div>
        </div>
        <form className="grid gap-y-4 mt-12 max-w-xl lg:mt-auto">
          <InputWrapper>
            <InputLabel>Name</InputLabel>
            <TextField name="as" />
          </InputWrapper>

          <InputWrapper>
            <InputLabel>Email</InputLabel>
            <TextField name="as" />
          </InputWrapper>

          <InputWrapper>
            <InputLabel>Message</InputLabel>
            <TextArea name="message" rows={8} />
          </InputWrapper>

          <div>
            <Button>Send the message</Button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
