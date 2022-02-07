import React from "react";
import Layout from "../components/layout";
import { DiGithubFull } from "@react-icons/all-files/di/DiGithubFull"
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle"
import { GrLinkedin } from "@react-icons/all-files/gr/GrLinkedin"

export default function Contact() {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <DiGithubFull />
      <AiFillTwitterCircle />
      <GrLinkedin/>
    </Layout>
  );
}
