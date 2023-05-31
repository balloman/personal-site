import { A } from "@solidjs/router";

export interface SidebarProps {
  class?: string;
}

const Si = (props: { children: string; href: string }) => {
  return (
    <A href={props.href}>
      <li
        class="cursor-pointer text-center text-xl font-semibold text-blue-900 transition-all
               hover:translate-x-3 hover:underline"
      >
        {props.children}
      </li>
    </A>
  );
};

const Sidebar = (props: SidebarProps) => {
  return (
    <div class={props.class}>
      <div class="flex justify-center shadow-xl">
        <ul class="flex h-screen flex-col justify-around">
          <Si href="/">Home</Si>
          <Si href="/about">About Me</Si>
          <Si href="/experience">Experience</Si>
          <Si href="/projects">Projects</Si>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
