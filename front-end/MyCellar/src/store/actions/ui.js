import { UI_START_LOADING, UI_STOP_LOADING } from './actionTypes';

export const uiStartLoading = () => {
  console.log('action triggered: start');
    return {
        type: UI_START_LOADING
    };
};

export const uiStopLoading = () => {
    console.log('action triggered: stop');
    return {
        type: UI_STOP_LOADING
    };
};