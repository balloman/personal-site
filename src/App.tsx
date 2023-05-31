import { HopeProvider, HopeThemeConfig } from "@hope-ui/solid";
import { Route, Routes } from "@solidjs/router";
import "flowbite";
import { Component, lazy } from "solid-js";

import Sidebar from "./Sidebar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const config: HopeThemeConfig = {
  initialColorMode: "dark",
  darkTheme: {
    colors: {
      primary1: "#809FFF",
    },
  },
};

const App: Component = () => {
  return (
    <HopeProvider config={config}>
      <div class="flex">
        <Sidebar class="h-screen w-52 bg-blue-300 shadow-xl" />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" element="Not Found" />
        </Routes>
      </div>
    </HopeProvider>
  );
};

export default App;
