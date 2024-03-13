import {batch} from 'react-redux';
import {setGraphs} from './index';
import apiThunk from './api';

export function requestDependencies() {
    return (dispatch: any, getState: any) => {
        batch(() => {
            const {graphs, token} = getState();
            dispatch(setGraphs({...graphs, reset: true}));
            dispatch(
                apiThunk('_dash-dependencies', 'GET', 'dependenciesRequest', token)
            );
        });
    };
}
