"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { SideNavItem } from "./side-nav-item";
import { usePathname } from "next/navigation";
import { items } from "../constants/navItems";
import Image from "next/image";

type Anchor = "top" | "left" | "bottom" | "right";
const SideNav = () => {
  const [open, setOpen] = React.useState(true);
  const pathname = usePathname();
  return (
    <div>
      <Drawer
        anchor={"left"}
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "#1C2536",
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          <h1 className="text-3xl font-bold"> Fin Super App</h1>
        </Box>
        <Divider sx={{ borderColor: "#2F3746" }} />
        {items.map((item) => {
          return (
            <SideNavItem
              active={item.path ? pathname === item.path : false}
              //   disabled={item.disabled}
              //   external={item.external}
              icon={item.icon}
              key={item.title}
              path={item.path}
              title={item.title}
            />
          );
        })}
      </Drawer>
    </div>
  );
};

export default SideNav;
