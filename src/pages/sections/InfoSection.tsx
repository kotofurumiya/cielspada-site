import React, { useContext } from 'react';
import styled from 'styled-components';
import { CrewInfo, CrewContext } from '../../context/crew';

type InfoSectionProps = {} & React.HTMLAttributes<HTMLElement>;

type InfoSectionComponentProps = {
  crewInfo?: CrewInfo;
} & InfoSectionProps;

const InfoSectionComponent = ({crewInfo, ...props}: InfoSectionComponentProps) => (
  <section {...props}>
    <div className="feature">
      <h2>古戦場Aランク2勝</h2>
      <p>
        古戦場はAランク2勝を狙います。
        勲章がたくさん手に入るので、金剛や玉髄も狙っていけます。
        10億貢献度も達成します。
      </p>
    </div>
    <div className="feature">
      <h2>ノルマ自己決定制度</h2>
      <p>
        あなたのノルマは、あなたが決めます。「肉4000個」「個ラン10万位」「貢献度5億」など
        自由に決定することができます。
      </p>
    </div>
    <div className="feature">
      <h2>リアル優先の古戦場</h2>
      <p>
        リアル優先となるので事情さえあれば古戦場を休むことができます。ペナルティはありません。
        （※きちんと連絡ができる方に限ります）
      </p>
    </div>
    <div className="feature">
      <h2>ルシファーキャリー</h2>
      <p>
        ルシファーHardでのキャリーが可能です。
        4人討伐の実績があるので、あなたが足を引っ張ることはありません。
      </p>
    </div>
    <div className="feature">
      <h2>Discordでチャット</h2>
      <p>
        チャットにDiscordを導入しており、より円滑なコミュニケーションが可能になります。
        特に週末はいつも盛り上がっています。（※ボイスチャットへの参加は必須ではありません）
      </p>
    </div>
    <div className="feature">
      <h2>団の基本情報</h2>
      {crewInfo ? 
        <div className="crew-info">
          <h3>平均ランク</h3>
          <div>{crewInfo.avgRank}</div>
          <h3>アサルトタイム</h3>
          <div><div>22:00-23:00</div><div>23:00-0:00</div></div>
        </div> : <p className="error-message">データ取得エラー</p>}
    </div>
  </section>
);

const StyledInfoSectionComponent = styled(InfoSectionComponent)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  justify-items: center;
  background-color: rgb(241, 232, 232);
  color: rgb(60, 60, 70);
  padding: 8em 2rem 4em 2rem;
  height: 100%;

  & .feature {
    width: min-content;
    max-width: 100%;

    & h2 {
      font-size: 3em;
      width: max-content;
      text-align: center;
      margin-bottom: 0.5em;
    }

    & p {
      font-size: 1.3em;
    }
  }

  & .crew-info {
    & h3 {
      text-align: center;
      margin-top: 1.5em;
    }

    & div {
      text-align: center;
    }
  }

  @media screen and (max-width: 1600px) {
    font-size: 0.7em;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    padding-top: 15vh;
  }

  @media screen and (max-width: 700px) {
    font-size: 0.25em;
  }
`;

export const InfoSection = (props: InfoSectionProps) => {
  const crewInfo = useContext(CrewContext);
  return <StyledInfoSectionComponent {...props} crewInfo={crewInfo}/>;
};