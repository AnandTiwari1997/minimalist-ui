import { type State, StateEnum, type States } from '@minimalist-ui/core';

export function getState(states: States): State {
    if (states.hidden) {
        return StateEnum.HIDDEN;
    }

    if (states.disabled) {
        return StateEnum.DISABLED;
    }

    if (states.error) {
        return StateEnum.ERROR;
    }

    if (states.active) {
        return StateEnum.ACTIVE;
    }

    if (states.focused) {
        return StateEnum.FOCUSED;
    }

    if (states.hovered) {
        return StateEnum.HOVERED;
    }

    return StateEnum.DEFAULT;
}
