import React from 'react';
import 'components/sections/ProjectList/ProjectList.scss';
import ProjectListImage from 'img/ProjectList.jpg';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';

function ProjectList() {
  return (
    <div className="ProjectList">
      <SectionHeader img={ProjectListImage} imgAlt="A computer with code on the screen" title={process.env.REACT_APP_PROJECTS_TITLE} anchor={process.env.REACT_APP_PROJECTS_ANCHOR}>

      </SectionHeader>
    </div>
  );
}

export default ProjectList;
