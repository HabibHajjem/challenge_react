function ProjectsChild({data}) {
    return (  
        data.map((el,index)=>(
            <div className="project-card" key={index}>
            <img src={el.photo} alt="project" />
            <h3>{el.title}</h3>
            <p>
              {el.content}
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
        )
        )
    );
}

export default ProjectsChild;
