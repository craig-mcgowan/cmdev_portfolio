import React from "react";
import Layout from "../components/layout";
import { projects } from "../data/projects";
import * as projectStyles from "../components/projects.module.scss"
export default function Projects() {

  /*----------------------------------
     Style Objects
  ----------------------------------*/
  const projectContainer = {
    width: '80%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }
  
  const ProjectCards = projects
    .map(project => (
      <section className={projectStyles.container}>
        <h3>{project.name}</h3>
        <img className={projectStyles.pic} src={project.image} alt={project.name} />
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
      {ProjectCards}
    </Layout>
  );
}
