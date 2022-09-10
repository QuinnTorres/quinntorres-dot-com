import React from 'react';
import 'components/sections/ProjectList/ProjectList.scss';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';

function ProjectList() {
  return (
    <div className="ProjectList">
      <SectionHeader img="placeholder" imgAlt="placeholder" title="Projects" anchor={process.env.REACT_APP_PROJECTS_ANCHOR}>

      </SectionHeader>
    </div>
  );
}

export default ProjectList;
