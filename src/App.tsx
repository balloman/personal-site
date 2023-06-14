import { A, Route, Routes } from "@solidjs/router";
import { FiMenu } from "solid-icons/fi";
import { Component, lazy } from "solid-js";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const SidebarLink = (props: { children: string; href: string }) => (
  <li>
    <a href={props.href}>{props.children}</a>
  </li>
);

const App: Component = () => (
  <div class="drawer md:drawer-open">
    <input id="d-toggle" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex h-screen flex-col">
      <div class="w-full px-2 py-2 md:hidden">
        <label for="d-toggle" class="drawer-button btn-outline btn md:hidden">
          <FiMenu class="h-4 w-4" />
        </label>
      </div>
      <div class="flex-1">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" element={"404"} />
        </Routes>
      </div>
    </div>
    <div class="drawer-side">
      <label for="d-toggle" class="drawer-overlay" />
      <ul class="menu h-full w-64 space-y-5 bg-base-200 p-4 text-base-content">
        <SidebarLink href="/">Home</SidebarLink>
        <SidebarLink href="/about">About Me</SidebarLink>
        <SidebarLink href="/experience">Experience</SidebarLink>
        <SidebarLink href="/projects">Projects</SidebarLink>
      </ul>
    </div>
  </div>
);

export default App;
