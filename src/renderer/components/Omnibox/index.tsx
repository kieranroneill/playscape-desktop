import * as React from 'react';
import styled from 'styled-components';

// Components.
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import RefreshIcon from '@material-ui/icons/Refresh';
import AddressBar from '../AddressBar';

// Styles.
import palette from '../../styles/palette';

const ButtonContainer = styled.div`

`;
const Wrapper = styled.header`
  align-items: center;
  background-color: ${palette.primary.lightGrey};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
`;

export const Omnibox: React.SFC = () => (
    <Wrapper>
        <ButtonContainer>
            <IconButton
                aria-label="Arrow back"
            >
                <ArrowBackIcon />
            </IconButton>
        </ButtonContainer>
        <ButtonContainer>
            <IconButton
                aria-label="Arrow forward"
            >
                <ArrowForwardIcon />
            </IconButton>
        </ButtonContainer>
        <ButtonContainer>
            <IconButton
                aria-label="Refresh"
            >
                <RefreshIcon />
            </IconButton>
        </ButtonContainer>
        <AddressBar />
    </Wrapper>
);
