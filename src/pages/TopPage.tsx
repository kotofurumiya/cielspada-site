import React, { useCallback } from 'react';
import { Page } from '../containers/Page';
import styled from 'styled-components';
import { LandingSection } from './sections/LandingSection';
import { InfoSection } from './sections/InfoSection';
import { RecruitSection } from './sections/RecruitSection';

type TopPageProps = {} & React.HTMLAttributes<HTMLElement>;

type TopPageComponentProps = {
  keywords: string[];
  gotoTop: (event: React.MouseEvent) => any;
  gotoInfo: (event: React.MouseEvent) => any;
  gotoRecruit: (event: React.MouseEvent) => any;
} & TopPageProps;

const keywordsBase = [
  '古戦場',
  '高難易度',
  'ルシファー',
  'アルバハ',
  'チャット'
];

const TopPageComponent = ({keywords, gotoTop, gotoInfo, gotoRecruit, ...props}: TopPageComponentProps) => (
  <Page {...props}>
    <header>
      <img className="logo-img" src="img/top-logo-black.svg" alt="cielspada"/>
      <nav className="top-nav">
        <div onClick={gotoTop}>TOP</div>
        <div onClick={gotoInfo}>INFO</div>
        <div onClick={gotoRecruit}>RECRUIT</div>
      </nav>
    </header>
    <LandingSection id="top" className="section"/>
    <InfoSection id="info" className="section"/>
    <RecruitSection id="recruit" className="section"/>
  </Page>
);

const StyledTopPageComponent = styled(TopPageComponent)`
  height: 100%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  & header {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
    padding: 2rem;
    width: 100%;
    z-index: 1;
  }

  & .top-nav {
    display: flex;
    color: var(--brand-color);
  }

  & .top-nav > div {
    border-bottom: 2px solid var(--brand-color);
    color: inherit;
    padding: 0.5em 1em;
    cursor: pointer;
    margin-left: 1.5em;
    text-decoration: none;
  }

  & .logo-img {
    height: 3em;
  }

  & .section {
    scroll-snap-align: center;
  }

  @media screen and (max-width: 700px) {
    & header {
      font-size: 0.4em;
    }

    & .logo-img {
      height: 3em;
    }
  }
`;

export const TopPage = () => {
  const gotoTop = useCallback(() => {
    document.querySelector('#top')?.scrollIntoView({behavior: 'smooth'});
  }, []);

  const gotoInfo = useCallback(() => {
    document.querySelector('#info')?.scrollIntoView({behavior: 'smooth'});
  }, []);

  const gotoRecruit = useCallback(() => {
    document.querySelector('#recruit')?.scrollIntoView({behavior: 'smooth'});
  }, []);

  return (
    <StyledTopPageComponent
      keywords={['グラブル', ...keywordsBase]}
      gotoTop={gotoTop}
      gotoInfo={gotoInfo}
      gotoRecruit={gotoRecruit}
    />
  );
};