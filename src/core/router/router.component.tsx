import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { AboutMeScene, ContactScene, ProjectScene, HomeScene } from '../../scenes';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene/>}></Route>
        <Route path={switchRoutes.aboutMe} element={<AboutMeScene />}></Route>
        <Route path={switchRoutes.project} element={<ProjectScene />}></Route>
        <Route path={switchRoutes.contact} element={<ContactScene />}></Route>
      </Routes>
    </HashRouter>
  )
}