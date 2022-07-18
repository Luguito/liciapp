import React, { FC } from 'react';

import { ProjectContent } from './projects.styled';
import { ProjectProps } from './projects';
import { ProjectList } from './ProjectList';

export const Projects: FC<ProjectProps> = ({ title }) => {
    return (
        <ProjectContent>
            <ProjectList projects={''} ></ProjectList>
        </ProjectContent>
    );
};
