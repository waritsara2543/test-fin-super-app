"use client";
import ReactQuery from "@/providers/reactQuery";
import React from "react";
import ThemeComponent from "@/themes/themeComponent";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQuery>
      <ThemeComponent>{children}</ThemeComponent>
    </ReactQuery>
  );
};

export default RootProvider;
