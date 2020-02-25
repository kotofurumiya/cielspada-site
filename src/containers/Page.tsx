import React from 'react';
import styled from 'styled-components';

type PageProps = {} & React.HTMLAttributes<HTMLElement>;

type PageComponentProps = {

} & PageProps;

const PageComponent = (props: PageComponentProps) => (
  <div {...props}/>
);

const StyledPageComponent = styled(PageComponent)`
  position: relative;
  height: 100%;
`;

export const Page = (props: PageProps) => {
  return <StyledPageComponent {...props}/>
}