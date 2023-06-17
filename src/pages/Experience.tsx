import { For, createResource, createSignal } from "solid-js";


interface Job {
  company: string;
  title: string;
  description: string;
  start: string;
  end: string;
  bullets: string[];
  location: string;
}

const getJobs = async (): Promise<Job[]> => {
  const response = await fetch("./resume.json");
  const data = await response.json();
  return data.jobs;
};

const JobComponent = ({ job }: { job: Job }) => (
  <li class="w-full py-2 text-sm text-base-content">
    <div class="grid gap-1 md:grid-cols-7">
      <p class="text-base font-bold md:col-span-5">
        {job.title} - {job.company}
      </p>
      <div class="flex font-medium text-gray-400 md:col-span-2 md:justify-end">
        {job.start} - {job.end}
      </div>
      <p class="col-span-full font-medium text-gray-400">{job.location}</p>
      <p class="font-bold md:col-span-5">{job.description}</p>
      <div class="col-span-full" />
      <ul class="col-span-full list-inside list-disc space-y-1">
        <For each={job.bullets}>{(bullet) => <li class="font-light">{bullet}</li>}</For>
      </ul>
    </div>
  </li>
);

const Experience = () => {
  const [jobs] = createResource<Job[]>(getJobs);

  return (
    <div>
      <section class="min-h-full p-6 md:hero">
        <div class="flex flex-col px-4">
          <p class="text-2xl font-bold">My Work Experience</p>
          <div class="divider" />
          <ol class="grid grid-cols-1 gap-4">
            <For each={jobs()}>{(job) => <JobComponent job={job} />}</For>
          </ol>
        </div>
      </section>
      <footer class="footer footer-center p-4 mt-8 w-full font-extralight text-base-content">
        <div>
          <p>
            Download my resume pdf{" "}
            <a class="bold link" href="/Resume.pdf">
              here
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Experience;
