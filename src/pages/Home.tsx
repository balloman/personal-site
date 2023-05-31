import { IconButton } from "@hope-ui/solid";
import { BsLinkedin } from "solid-icons/bs";
import { FaBrandsInstagram } from "solid-icons/fa";
import { VsGithubInverted } from "solid-icons/vs";

const Home = () => {
  return (
    <div class="flex w-full bg-primary px-10">
      <div class="flex flex-1 flex-col items-center justify-center">
        <div class="flex flex-1 flex-col-reverse justify-items-end">
          <p class="my-4 text-center text-xl text-blue-100">Fullstack Software Developer</p>
          <p class="text-center text-4xl font-bold text-white drop-shadow-lg">Bernard Allotey</p>
        </div>
        <div class="flex max-w-[200px] flex-1 -translate-x-5 items-center justify-center">
          <img src="/images/bubbles.png" />
        </div>
      </div>
      <div class="flex flex-1 flex-col items-center justify-center">
        <img src="/images/zig.png" class="y-20 w-20 -translate-x-32" />
        <img src="/images/profile.png" />
      </div>
      <div class="absolute right-1/2 top-10"></div>
      <div class="absolute bottom-5 right-5 flex flex-row-reverse">
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
    </div>
  );
};

export default Home;
