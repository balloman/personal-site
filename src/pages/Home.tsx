import { BsLinkedin } from "solid-icons/bs";
import { FaBrandsInstagram } from "solid-icons/fa";
import { VsGithubInverted } from "solid-icons/vs";
import { JSX } from "solid-js";


const MenuIcon = (props: { icon: JSX.Element; link: string }) => (
  <li class="p-0">
    <a onClick={() => window.open(props.link)}>{props.icon}</a>
  </li>
);

const Home = () => (
  <>
    <div class="flex h-full w-full flex-1 flex-col px-10 md:flex-row">
      <div class="flex flex-col items-center justify-center md:flex-1">
        <div class="flex flex-col-reverse justify-items-end pt-5 md:flex-1 md:p-0">
          <p class="my-4 text-center text-xl text-blue-100">Fullstack Software Developer</p>
          <p class="text-center text-4xl font-bold text-white drop-shadow-lg">Bernard Allotey</p>
        </div>
        <div class="hidden max-w-[200px] flex-1 items-center md:flex">
          <img src="/images/b5xubbles.png" class="w-full" />
        </div>
      </div>
      <div class="flex w-full flex-1 flex-col items-center justify-center p-8">
        <img src="/images/profile.webp" class="w-full max-w-lg" />
      </div>
      <div class="absolute right-1/2 top-10"></div>
    </div>
    <div class="absolute bottom-10 right-10">
      <ul class="menu menu-horizontal p-0">
        <MenuIcon link="https://github.com/balloman" icon={<VsGithubInverted class="h-5 w-5" />} />
        <MenuIcon link="https://www.linkedin.com/in/bernard-a-842555106/" icon={<BsLinkedin class="h-5 w-5" />} />
        <MenuIcon link="https://www.instagram.com/benard_allotey/" icon={<FaBrandsInstagram class="h-5 w-5" />} />
      </ul>
    </div>
  </>
);

export default Home;
