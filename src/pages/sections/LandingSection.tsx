import React from 'react';
import styled from 'styled-components';
import { TextCycle } from '../../components/TextCycle';
type LandingSectionProps = {} & React.HTMLAttributes<HTMLElement>;

type LandingSectionComponentProps = {
  keywords: string[];
} & LandingSectionProps;

const keywordsBase = [
  '古戦場',
  '高難易度',
  'ルシファー',
  'アルバハ',
  'チャット'
]

const LandingSectionComponent = ({keywords, ...props}: LandingSectionComponentProps) => (
  <section {...props}>
    <div className="content">
      <div className="tagline">
        <div >Ciel†Sp@daで</div>
        <div className="tagline-middle">皆と<TextCycle textList={keywords} intervalMs={1500}/>を</div>
        <div>一緒に楽しもう！</div>
        <p className="tagline-sub">
          マルチバトルから古戦場、そしてエンドコンテンツまで。
          きっと素晴らしい空の旅になります。
        </p>
      </div>
    </div>
  </section>
);

const StyledLandingSectionComponent = styled(LandingSectionComponent)`
  display: flex;
  flex-direction: column;
  font-weight: 900;
  color: rgb(60, 60, 70);
  background: url('./img/grancypher-bg.png') no-repeat;
  background-size: auto 80vh;
  background-position: right center;
  padding: 0.5em 2rem;
  height: 100%;

  & .content {
    flex: 1;
    position: relative;
  }

  & .tagline {
    position: absolute;
    bottom: 5%;
    font-size: 3em;
    width: min-content;
  }

  & .tagline-middle {
    display: flex;
    align-items: center;
    width: max-content;
  }

  & .tagline-sub {
    font-size: 0.5em;
    font-weight: normal;
    padding: 0.2em
  }

  @media screen and (max-width: 700px) {
    background: url('./img/grancypher-bg-mobile.png') no-repeat right center;
    background-size: 70%;

    & .tagline {
      font-size: 1.3em;
    }
  }
`;

export const LandingSection = (props: LandingSectionProps) => {
  return <StyledLandingSectionComponent keywords={['グラブル', ...keywordsBase]} {...props}/>;
};