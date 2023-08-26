"use client";

import { useState } from "react";

import Hero from "@/common/components/Hero";

import DoctorList from "./DoctorList";

const Doctor = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Hero onSearch={(value) => setSearchValue(value)} />
      <DoctorList searchValue={searchValue} />
    </>
  );
};

export default Doctor;
