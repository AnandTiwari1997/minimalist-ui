import { iconAliases } from "@minimalist-ui/core/icons/utils/iconAliases";
import { type IconDefinition } from "@minimalist-ui/core/icons/utils/types";

/**
 * A record that maps icon names to their corresponding IconDefinition objects.
 */
const registry: Record<string, IconDefinition> = {};

/**
 * A record that maps icon aliases to their corresponding icon names.
 */
const aliases: Record<string, string> = { ...iconAliases };

/**
 * Registers an icon with its display name and optional aliases.
 * @param {IconDefinition} icon - The IconDefinition object for the icon to register.
 * @param {string[]} [aliasList=[]] - An array of alias names for the icon.
 */
export function registerIcon(icon: IconDefinition, aliasList: string[] = []) {
    const key = icon.displayName.toLowerCase();
    registry[key] = icon;

    for (const alias of aliasList) {
        aliases[alias.toLowerCase()] = key;
    }
}

/**
 * Registers multiple icons with their display names and optional aliases.
 * @param {Array<{ icon: IconDefinition; aliases?: string[] }>} icons - An array of objects containing the IconDefinition object for each icon and an optional array of alias names.
 */
export function registerIcons(icons: Array<{ icon: IconDefinition; aliases?: string[] }>) {
    for (const { icon, aliases: aliasList = [] } of icons) {
        registerIcon(icon, aliasList);
    }
}

/**
 * Retrieves the IconDefinition object for a given icon name or alias.
 * @param {string} name - The name or alias of the icon to retrieve.
 * @returns {IconDefinition | undefined} The IconDefinition object for the icon, or undefined if no matching icon is found.
 */
export function getIcon(name: string): IconDefinition | undefined {
    const key = name.toLowerCase();
    const resolvedName = aliases[key] || key;
    return registry[resolvedName];
}

/**
 * A record that maps icon names to their corresponding IconDefinition objects.
 */
export const iconRegistry = registry;

/**
 * A record that maps icon aliases to their corresponding icon names.
 */
export const iconAliasesRegistry = aliases;
