import localFont from "next/font/local";

export const GillSans = localFont({
  src: [
    {
      path: "./GillSans/GillSans-Light.otf",
      weight: "200",
    },
    {
      path: "./GillSans/GillSans-Medium.otf",
      weight: "300",
    },
    {
      path: "./GillSans/GillSans-Condensed.otf",
      weight: "400",
    },
    {
      path: "./GillSans/GillSans-Bold.otf",
      weight: "500",
    },
    {
      path: "./GillSans/GillSans-Heavy.otf",
      weight: "700",
    },
  ],
  variable: "--GillSans-font",
  display: "swap",
});
