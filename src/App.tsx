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
      <div class="h-screen bg-primary">
        <Sidebar />
        <div class="sm:ml-48 p-4 h-full flex">
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="*" element="Not Found" />
          </Routes>
        </div>
      </div>
    </HopeProvider>
  );
};

export default App;
