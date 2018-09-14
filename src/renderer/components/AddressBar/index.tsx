import * as React from 'react';
import { connect } from 'react-redux';
import {
    ActionCreator,
    bindActionCreators,
    Dispatch,
} from 'redux';
import styled from 'styled-components';

// Action creators.
import {
    setUrl,
} from '../../store/address/actionCreators';

// Config.
import { KeyCodeEnum } from '../../config/keys';

// Styles.
import palette from '../../styles/palette';

// Types.
import { ApplicationState } from '../../store';
import {
    AddressState,
    SetUrlAction,
} from '../../store/address/types';

const Wrapper = styled.div`
  border: solid 1px ${palette.primary.grey};
  border-radius: 3px;
  display: flex;
  flex: 1;
  height: 100%;
  margin: 0 0.5rem;
`;
const AddressInput = styled.input`
  font-size: 1rem;
  height: 24px;
  padding: 0 0.5rem;
  width: 100%;
`;

export interface Props {
    addressState: AddressState;
    setUrl: ActionCreator<SetUrlAction>;
}

export class AddressBar extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);

        // Bind methods.
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    public render(): React.ReactElement<AddressBar> {
        const { addressState } = this.props;

        return (
            <Wrapper>
                <AddressInput
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    type="text"
                    value={addressState.url}
                />
            </Wrapper>
        );
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { target } = event;

        this.props.setUrl(target.value);
    }

    private handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
        const { keyCode } = event;

        if (keyCode === KeyCodeEnum.Enter) {
            console.log('Pressed enter');
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setUrl: bindActionCreators(setUrl, dispatch),
});
const mapStateToProps = (state: ApplicationState) => ({
    addressState: state.addressState,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBar);
