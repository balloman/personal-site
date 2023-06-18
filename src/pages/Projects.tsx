import { For, Show, createResource } from "solid-js";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  stack: string[];
}

const ProjectComponent = (props: { project: Project }) => (
  <a
    href={props.project.link}
    class="card-bordered card glass my-8 w-full max-w-lg bg-primary text-primary-content shadow-xl transition-all hover:-translate-y-1 hover:opacity-50 lg:mb-8 lg:mt-0 lg:overflow-scroll"
  >
    <Show when={props.project.image}>
      <figure>
        <img src={`/images/${props.project.image}`} alt="momentos" />
      </figure>
    </Show>
    <div class="card-body">
      <h2 class="card-title">{props.project.title}</h2>
      <p class="card-description">{props.project.description}</p>
      <div class="card-actions">
        <For each={props.project.stack}>{(item) => <div class="badge badge-outline">{item}</div>}</For>
      </div>
    </div>
  </a>
);

const Projects = () => {
  const [projects] = createResource<Project[]>(async () => {
    const response = await fetch("/projects.json");
    const data = await response.json();
    return data.projects;
  });

  return (
    <div class="flex h-full flex-1 flex-col p-16">
      <p class="text-3xl font-bold text-accent">Projects</p>
      <div class="divider" />
      <div class="max-w-5xl gap-y-4 self-center lg:columns-2">
        <For each={projects()}>{(project) => <ProjectComponent project={project} />}</For>
      </div>
    </div>
  );
};

export default Projects;
