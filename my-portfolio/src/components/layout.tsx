{/*page.tsxのポートフォリオのlayoutを作成するファイル*/}
import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Profile } from './profile';
import { Skills } from './skills';
import { Works } from './works';
import { Contact } from './contact';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <Profile />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
