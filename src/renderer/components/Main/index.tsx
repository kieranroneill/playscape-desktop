import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

export const Main: React.SFC = () => (
    <Wrapper>
        <webview
            autosize={true}
            src="http://www.google.com/"
            style={{
                minHeight: '100vh',
                width: '100%',
            }}
        />
    </Wrapper>
);
