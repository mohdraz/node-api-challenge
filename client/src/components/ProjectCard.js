import React from "react";
import { Card } from "react-bootstrap";
import { ProjectCardStyle } from "../styles/styles";
import { CardText } from "react-bootstrap/Card";

export default function ProjectCard(props) {
  const { name, description } = props.project;
  return (
    <ProjectCardStyle>
      <Card>
        <Card.Title> {name} </Card.Title>
        <Card.Text> {description} </Card.Text>
      </Card>
    </ProjectCardStyle>
  );
}
