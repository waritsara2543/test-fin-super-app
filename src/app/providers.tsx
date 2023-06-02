"use client";
import ReactQuery from "@/providers/reactQuery";
import React from "react";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <ReactQuery>{children}</ReactQuery>;
};

export default RootProvider;
