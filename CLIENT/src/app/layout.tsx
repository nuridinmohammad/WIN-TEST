import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { Navbar } from "@/components/molecules/Navbar";
import StoreProvider from "./Provider";

export const metadata = {
  title: "Knowledge Test Fullstack Engineer",
  description: "Knowledge Test Fullstack at PT. Widya Informasi Nusantara",
};

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <div className="relative">
            <Navbar />
          </div>
          <StoreProvider>{children}</StoreProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
