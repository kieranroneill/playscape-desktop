import * as React from 'react';
import { connect } from 'react-redux';
import {
    ActionCreator,
    bindActionCreators,
    Dispatch,
} from 'redux';
import styled from 'styled-components';

// Action creators.
import { closeSettingsDrawer } from '../../store/settings/actionCreators';

// Components.
import Drawer from '@material-ui/core/Drawer';

// Types.
import { ApplicationState } from '../../store';
import {
    CloseDrawerAction,
    SettingsState,
} from '../../store/settings/types';

const Container = styled.div`
  width: 350px;
`;

export interface Props {
    closeSettingsDrawer: ActionCreator<CloseDrawerAction>;
    settingsState: SettingsState;
}

export const SettingsDrawer: React.SFC<Props> = (props: Props) => (
    <Drawer
        anchor="right"
        open={props.settingsState.drawerOpen}
        onClose={() => props.closeSettingsDrawer()}
    >
        <Container />
    </Drawer>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
    closeSettingsDrawer: bindActionCreators(closeSettingsDrawer, dispatch),
});
const mapStateToProps = (state: ApplicationState) => ({
    settingsState: state.settingsState,
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDrawer);
