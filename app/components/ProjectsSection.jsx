import ImgMediaCard from './MediaCard';


const projectsData = [
  {
    id: 1,
    title: 'ML Breakout',
    description: "A video game replicating Atari's Breakout with an added Machine Learning element in player vs. AI gameplay. Built using Unity and Unity ML Agents.",
    image: '/images/thumbnails/mlbreakout.png',
    gitlink: 'https://github.com/chengmic/ml_breakout',
    videolink: 'https://youtu.be/Kf7kKUJoRrk',
  },
  {
    id: 2,
    title: 'Dark Brew Cafe Database Website',
    description: "A web application for database management for a hypothetical company, Dark Brew Cafe. The website incorporates CRUD (Create, Read, Update, Delete) operations, utilizing Flask for web development and SQL for database management.",
    image: '/images/thumbnails/darkbrewcafe.png',
    gitlink: 'https://github.com/chengmic/Dark-Brew-Cafe-Database-Website',
    videolink: '',
  },
  {
    id: 3,
    title: 'PokePy',
    description: "A Python-based desktop Pokedex application, using customtkinter for the graphical user interface and integrating PokeAPI for dynamic Pokemon data retrieval. The project aimed to showcase proficiency in creating a basic UI and utilizing external APIs, with an additional focus on microservices.",
    image: '/images/thumbnails/pokepy.png',
    gitlink: 'https://github.com/chengmic/PokePy',
    videolink: 'https://www.youtube.com/watch?v=NFW5ps8meiI',
  },
];


const ProjectsSection = () => {

  return (
    <section className="text-white" id="projects">
      <div className="gap-8 items-center py-8 px-4 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>

          <div className="flex gap-8 flex-wrap">
            {projectsData.map((project) => (
              <ImgMediaCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink = {project.gitlink}
                videolink = {project.videolink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;