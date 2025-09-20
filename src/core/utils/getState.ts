import { type State, StateEnum, type States } from '@minimalist-ui/core';

/**
 * Determines the current state of a component based on its states object.
 * @param {Object} states - An object containing boolean values representing the possible states of a component.
 * @returns {string} The current state of the component as a string value from the StateEnum.
 */
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
