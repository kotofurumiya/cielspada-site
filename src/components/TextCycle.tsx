import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type TextCycleProps = {
  textList: string[];
  intervalMs: number;
} & React.HTMLAttributes<HTMLElement>;

type TextCycleComponentProps = {
  currentText: string;
} & Omit<TextCycleProps, 'intervalMs'>;

const TextCycleComponent = ({currentText, textList, ...props}: TextCycleComponentProps) => (
  <span {...props}>
    <TransitionGroup className="cycle-animation">
      <CSSTransition in={true} key={currentText} classNames="cycle" timeout={500} unmountOnExit>
        <span key={currentText} className="text">{currentText}</span>
      </CSSTransition>
    </TransitionGroup>
  </span>
);

const StyledTextCycleComponent = styled(TextCycleComponent)`
  position: relative;
  display: inline-flex;
  align-items: center;
  border-bottom: 3px solid var(--brand-color);
  overflow: hidden;
  width: ${(p) => Math.max(...p.textList.map((t) => t.length)) + 0.5}em;
  text-align: center;
  box-sizing: unset;
  height: 1.3em;

  & .text {
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: var(--brand-color);
    width: ${(p) => Math.max(...p.textList.map((t) => t.length)) + 0.5}em;
    height: max-content;
  }

  .cycle-enter {
    position: absolute;
    left: 0;
    top: -2em;
  }

  .cycle-enter-active {
    top: 0;
    bottom: 0;
    transition: top 500ms ease-out;
  }

  .cycle-exit {
    position: absolute;
    left: 0;
    top: 0;
  }

  .cycle-exit-active {
    top: 2.5em;
    transition: top 500ms ease-out;
  }
`;

export const TextCycle = ({intervalMs, ...props}: TextCycleProps) => {
  const [index, setIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(props.textList[0]);

  useEffect(() => {
    const maxIndex = props.textList.length - 1;
    const timer = setTimeout(() => {
      setIndex((i) => i < maxIndex ? i+1 : 0);
      setCurrentText(props.textList[index]);
    }, intervalMs);

    return () => clearTimeout(timer);
  }, [index, props.textList, intervalMs]);

  return <StyledTextCycleComponent {...props} currentText={currentText}/>;
};