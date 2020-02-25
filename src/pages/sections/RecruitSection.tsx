import React, { useContext } from 'react';
import styled from 'styled-components';
import { CrewContext, CrewInfo } from '../../context/crew';

type RecruitSectionProps = {} & React.HTMLAttributes<HTMLElement>;

type RecruitSectionComponentProps = {
  crewInfo?: CrewInfo;
} & RecruitSectionProps;

const RecruitSectionComponent = ({crewInfo, ...props}: RecruitSectionComponentProps) => (
  <section {...props}>
    <div className="container">
      <h2>入団条件</h2>
      {crewInfo ? 
        <ul>
          <li>ランク{crewInfo.requiredRank}以上</li>
          <li>Discordを導入できる（※ボイチャ不要）</li>
          <li>古戦場ノルマを自分で決めて達成できる</li>
          <li>ノルマ達成できない場合に連絡ができる</li>
        </ul> : <div className="error-message">データ取得エラー</div>}
      <h2>入団手続き</h2>
      {crewInfo ? crewInfo.isRecruiting ?
        <div className="recruit-message">
          <div>団長:ルシフ(<a href="https://twitter.com/lucifeus_cs" target="_blank" rel="noopener noreferrer">@lucifeus_cs</a>)</div>
          <div>または</div>
          <div>副団長:古都こと(<a href="https://twitter.com/kfurumiya" target="_blank" rel="noopener noreferrer">@kfurumiya</a>)</div>
          <div>まで連絡ください。</div>
        </div> :
        <div className="recruit-message">現在団員の募集は行っておりません</div> :
        <div className="recruit-message error-message">データ取得エラー</div>}
    </div>
  </section>
);

const StyledRecruitSectionComponent = styled(RecruitSectionComponent)`
  font-size: 1.5em;
  height: 100%;
  padding: 0 2em;

  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  & h2 {
    text-align: center;
    margin: 1.5em 0 1em 0;
  }

  & ul {
    width: max-content;
  }

  & ul li {
    margin-bottom: 1em;
  }

  & .recruit-message {
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    font-size: 0.8em;
  }
`;

export const RecruitSection = (props: RecruitSectionProps) => {
  const crewInfo = useContext(CrewContext);

  return <StyledRecruitSectionComponent {...props} crewInfo={crewInfo}/>;
};