import * as React from 'react';
import { connect } from 'react-redux';
import {
    ActionCreator,
    bindActionCreators,
    Dispatch,
} from 'redux';
import styled from 'styled-components';

// Action creators.
import { openSettingsDrawer } from '../../store/settings/actionCreators';

// Components.
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import HomeIcon from '@material-ui/icons/Home';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';
import AddressBar from '../AddressBar';

// Styles.
import palette from '../../styles/palette';

// Types.
import { OpenDrawerAction } from '../../store/settings/types';

const Wrapper = styled.header`
  align-items: center;
  background-color: ${palette.primary.lightGrey};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
`;

export interface Props {
    openSettingsDrawer: ActionCreator<OpenDrawerAction>;
}

export const Omnibox: React.SFC<Props> = (props: Props) => (
    <Wrapper>
        <IconButton
            aria-label="Arrow back"
        >
            <ArrowBackIcon />
        </IconButton>
        <IconButton
            aria-label="Arrow forward"
        >
            <ArrowForwardIcon />
        </IconButton>
        <IconButton
            aria-label="Home"
        >
            <HomeIcon />
        </IconButton>
        <IconButton
            aria-label="Refresh"
        >
            <RefreshIcon />
        </IconButton>
        <AddressBar />
        <IconButton
            aria-label="Settings"
            onClick={() => props.openSettingsDrawer()}
        >
            <SettingsIcon />
        </IconButton>
    </Wrapper>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
    openSettingsDrawer: bindActionCreators(openSettingsDrawer, dispatch),
});

export default connect(undefined, mapDispatchToProps)(Omnibox);
