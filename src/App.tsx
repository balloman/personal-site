import { A, Route, Routes } from "@solidjs/router";
import { FiMenu } from "solid-icons/fi";
import { Component, lazy } from "solid-js";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));

const SidebarLink = (props: { children: string; href: string }) => (
  <li>
    <A inactiveClass="font-normal" activeClass="font-bold text-secondary" end={props.href === "/"} href={props.href}>
      {props.children}
    </A>
  </li>
);

const App: Component = () => {
  window.addEventListener("mousemove", ({ pageX, pageY }) => {
    const pEffect = document.getElementById("p-effect");
    if (pEffect) {
      pEffect.style.setProperty("--point-x", `${pageX}px`);
      pEffect.style.setProperty("--point-y", `${pageY}px`);
    }
  });

  return (
    <>
      <div
        id="p-effect"
        class="pointer-events-none absolute inset-0 z-10 hidden transition duration-300 md:block"
        style="background: radial-gradient(600px at var(--point-x) var(--point-y), rgba(30, 78, 216, 0.1), transparent 80%);"
      />
      <div class="drawer md:drawer-open">
        <input id="d-toggle" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content h-screen md:h-full flex flex-col">
          <div class="w-full px-2 py-2 md:hidden">
            <label for="d-toggle" class="drawer-button btn-outline btn md:hidden">
              <FiMenu class="h-4 w-4" />
            </label>
          </div>
          <div class="flex-1">
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/experience" component={Experience} />
              <Route path="*" element={"404"} />
            </Routes>
          </div>
        </div>
        <div class="drawer-side z-50 shadow-xl">
          <label for="d-toggle" class="drawer-overlay" />
          <ul class="menu h-full w-64 space-y-5 bg-base-200 p-4 text-base-content shadow-xl">
            <SidebarLink href="/">Home</SidebarLink>
            <SidebarLink href="/about">About Me</SidebarLink>
            <SidebarLink href="/experience">Experience</SidebarLink>
            <SidebarLink href="/projects">Projects</SidebarLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
