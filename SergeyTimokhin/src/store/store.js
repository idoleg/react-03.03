import { createStore } from 'redux';

export function initStore() {
    return createStore(reducer, preloadedState)
}