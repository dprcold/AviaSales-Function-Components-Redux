import React, { ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
});

interface ChakraWrapperProps {
  children: ReactNode;
}

export const ChakraWrapper: React.FC<ChakraWrapperProps> = ({ children }) => (
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>
);

