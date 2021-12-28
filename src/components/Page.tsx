import RotateDevice from "components/RotateDevice";
import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "react-use";
import AppBar from "./AppBar";

interface Props {
  title?: string;
  landscape?: boolean;
}

const Page: FC<Props> = ({ title, landscape, children }) => {
  const location = useLocation();
  const pageTitle = (title ? title + " - " : "") + "Note Trainer";

  useTitle(pageTitle);

  useEffect(() => {
    window.dataLayer.push({
      event: "virtualPageView",
      pageTitle,
      pageLocation: window.location.href,
    });

    setTimeout(() => {
      // Hide mobile address bar
      window.scrollTo(0, 1);
    }, 0);
  }, [location.pathname]);

  return (
    <>
      {landscape && <RotateDevice />}
      <AppBar title={title} />
      {children}
    </>
  );
};

export default Page;
