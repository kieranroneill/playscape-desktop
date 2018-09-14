import * as React from 'react';
import styled from 'styled-components';

// Components.
import SettingsDrawer from '../SettingsDrawer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export interface Props {
    children: React.ReactNode;
}

export const Shell: React.SFC<Props> = (props: Props) => (
    <Wrapper>
        <SettingsDrawer />
        {props.children}
    </Wrapper>
);
