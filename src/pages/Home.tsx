import { IconButton } from "@hope-ui/solid";
import { BsLinkedin } from "solid-icons/bs";
import { FaBrandsInstagram } from "solid-icons/fa";
import { VsGithubInverted } from "solid-icons/vs";


const Home = () => (
  <>
    <div class="flex h-full w-full flex-col bg-primary px-10 md:flex-row">
      <div class="flex flex-col items-center justify-center md:flex-1">
        <div class="flex flex-col-reverse justify-items-end pt-10 md:flex-1 md:p-0">
          <p class="my-4 text-center text-xl text-blue-100">Fullstack Software Developer</p>
          <p class="text-center text-4xl font-bold text-white drop-shadow-lg">Bernard Allotey</p>
        </div>
        <div class="hidden max-w-[200px] flex-1 -translate-x-5 items-center justify-center md:flex">
          <img src="/images/bubbles.png" class="w-full" />
        </div>
      </div>
      <div class="flex w-full flex-1 flex-col items-center justify-center p-4">
        <img src="/images/profile.png" class="w-full max-w-lg -translate-y-10" />
      </div>
      <div class="absolute right-1/2 top-10"></div>
    </div>
    <div class="absolute bottom-10 right-10 flex flex-row-reverse">
      <IconButton
        class="mx-1"
        compact
        aria-label="Github"
        onClick={() => {
          window.open("https://github.com/balloman");
        }}
        colorScheme="primary"
        icon={<VsGithubInverted />}
      />
      <IconButton
        class="mx-1"
        onClick={() => window.open("https://www.instagram.com/benard_allotey/")}
        compact
        aria-label="Instagram"
        colorScheme="primary"
        icon={<FaBrandsInstagram />}
      />
      <IconButton
        class="mx-1"
        onClick={() => window.open("https://www.linkedin.com/in/bernard-a-842555106/")}
        compact
        aria-label="LinkedIn"
        colorScheme="primary"
        icon={<BsLinkedin />}
      />
    </div>
  </>
);

export default Home;
