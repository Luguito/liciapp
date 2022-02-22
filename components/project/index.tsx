import React, { FC } from 'react';

import { ProjectContent } from './projects.styled';
import { ProjectProps } from './projects';
import { ProjectList } from './ProjectList';

export const Project: FC<ProjectProps> = ({ title }) => {
    return (
        <ProjectContent>
            <ProjectList projects={''} ></ProjectList>
        </ProjectContent>
    );
};
