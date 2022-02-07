import React from "react";
import Layout from "../components/layout";
import { projects } from "../data/projects";
import { Main } from "../styled/Main";

export default function Projects() {
  
  const ProjectCards = projects
    .map(project => (
      <section>
        <h3>{project.name}</h3>
        <img src={project.image} alt={project.name} />
        <a href={project.link} target="_blank" >View Live</a>
        <a href={project.frontendRepo} target="_blank" >Github Repo</a>
        {project.backendRepo && 
        <a href={project.backendRepo} target="_blank" >Backend Repo</a>
        }
        <p>{project.description}</p>
      </section>
    ))

  return (
    <Layout>
      <Main>

      {ProjectCards}
      </Main>
      
    </Layout>
  );
}
