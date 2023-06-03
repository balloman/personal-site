import { A } from "@solidjs/router";
import { VsKey } from "solid-icons/vs";
import { Component, JSX } from "solid-js";

export interface SidebarProps {
  class?: string;
}

const SidebarItem = (props: { children: string; iconComponent?: JSX.Element; href?: string }) => {
  return (
    <li>
      <A
        href={props.href ?? "#"}
        class="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        {props.iconComponent}
        <span class="ml-3">{props.children}</span>
      </A>
    </li>
  );
};

const Sidebar = (props: SidebarProps) => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed left-0 top-0 z-40 h-screen w-48 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full overflow-y-auto bg-blue-300 px-3 py-4 ">
          <ul class="space-y-12 font-medium">
            <SidebarItem>Home</SidebarItem>
            <SidebarItem href="/about">About Me</SidebarItem>
            <SidebarItem href="/experience">Experience</SidebarItem>
            <SidebarItem href="/projects">Projects</SidebarItem>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
