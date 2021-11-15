import proj1 from '../images/proj1.jpg'
import proj2 from '../images/proj2.jpg'
import proj3 from '../images/proj3.jpg'
import proj4 from '../images/proj4.jpg'
import ProjectsChild from './ProjectsChild';
function Projects(){
  let data=[
  {id:0, title:"Project 1",content:"paragraphe1",photo:proj1},
  {id:1, title:"Project 2",content:"paragraphe2",photo:proj2},
  {id:2,title:"Project 3",content:"paragraphe3",photo:proj3},
  {id:3,title:"Project 4",content:"paragraphe4",photo:proj4}
];
    return(
        <div className="Projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
        <ProjectsChild data={data} /> 
    {/** <div class="project-card">
            <img src={proj1} alt="project" />
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
          
          <div class="project-card">
            <img src={proj2} alt="project" />
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
          
          <div class="project-card">
            <img src={proj3} alt="project" />
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
          
          <div class="project-card">
            <img src={proj4} alt="project" />
            <h3>Project 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>  */}   
        </div>
        </div>
    );
}

export default Projects;