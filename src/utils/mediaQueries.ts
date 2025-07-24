import { useMediaQuery } from "react-responsive";

export const IsMobile = () => {
  return useMediaQuery({ query: "(max-width: 640px)" });
};

export const IsTablet = () => {
  return useMediaQuery({ query: "(max-width: 1024px)" });
};

export const IsDesktop = () => {
  return useMediaQuery({ query: "(min-width: 1025px)" });
}; 