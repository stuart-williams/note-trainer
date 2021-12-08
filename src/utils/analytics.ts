import { useEffect } from "react";
import { useLocation } from "react-router";

export const usePageView = (): void => {
  const win = window as any;
  const { pathname, search } = useLocation();

  useEffect(() => {
    win.gtag("set", "page", pathname + search);
    win.gtag("send", "pageview");
  }, [pathname]);
};
