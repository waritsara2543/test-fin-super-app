"use client";
import ReactQuery from "@/providers/reactQuery";
import ThemeComponent from "@/themes/ThemeComponent";
import React from "react";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQuery>
      <ThemeComponent>{children}</ThemeComponent>
    </ReactQuery>
  );
};

export default RootProvider;
