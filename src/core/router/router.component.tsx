import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { AboutMeScene, EducationScene, ExperienceScene, ProjectScene } from '../../scenes';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to={switchRoutes.home}/>}></Route>
        <Route path={switchRoutes.aboutMe} element={<AboutMeScene />}></Route>
        <Route path={switchRoutes.education} element={<EducationScene />}></Route>
        <Route path={switchRoutes.experience} element={<ExperienceScene />}></Route>
        <Route path={switchRoutes.project} element={<ProjectScene />}></Route>
      </Routes>
    </HashRouter>
  )
}