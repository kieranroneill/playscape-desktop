import { WebviewTag } from 'electron';
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
    startLoadingUrl,
    stopLoadingUrl,
} from '../../store/address/actionCreators';

// Components.
import LinearProgress from '@material-ui/core/LinearProgress';

// Types.
import { ApplicationState } from '../../store';
import {
    AddressState,
    StartLoadingUrlAction,
    StopLoadingUrlAction,
} from '../../store/address/types';

const Wrapper = styled.main`
  flex-grow: 1;
  overflow: hidden;
  width: 100%;
`;

export interface Props {
    addressState: AddressState;
    startLoadingUrl: ActionCreator<StartLoadingUrlAction>;
    stopLoadingUrl: ActionCreator<StopLoadingUrlAction>;
}

export class Main extends React.PureComponent<Props> {
    private readonly webViewRef: React.RefObject<WebviewTag>;

    constructor(props: Props) {
        super(props);

        this.webViewRef = React.createRef();

        // Bind methods.
        this.onLoadStart = this.onLoadStart.bind(this);
        this.onLoadStop = this.onLoadStop.bind(this);
    }

    public componentDidMount(): void {
        const { current } = this.webViewRef;

        if (current) {
            (current as WebviewTag).addEventListener('did-start-loading', this.onLoadStart);
            (current as WebviewTag).addEventListener('did-stop-loading', this.onLoadStop);
        }
    }

    public componentWillUnmount(): void {
        const { current } = this.webViewRef;

        if (current) {
            (current as WebviewTag).removeEventListener('did-strat-loading', this.onLoadStart);
            (current as WebviewTag).removeEventListener('did-stop-loading', this.onLoadStop);
        }
    }

    public render(): React.ReactElement<Main> {
        const { addressState } = this.props;

        return (
            <Wrapper>
                {
                    addressState.loading &&
                        <LinearProgress
                            color="primary"
                        />
                }
                <webview
                    ref={this.webViewRef}
                    src={addressState.url}
                    style={{
                        minHeight: '100vh',
                        width: '100%',
                    }}
                />
            </Wrapper>
        );
    }

    private onLoadStart(): void {
        this.props.startLoadingUrl();
    }

    private onLoadStop(): void {
        this.props.stopLoadingUrl();
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startLoadingUrl: bindActionCreators(startLoadingUrl, dispatch),
    stopLoadingUrl: bindActionCreators(stopLoadingUrl, dispatch),
});
const mapStateToProps = (state: ApplicationState) => ({
    addressState: state.addressState,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
