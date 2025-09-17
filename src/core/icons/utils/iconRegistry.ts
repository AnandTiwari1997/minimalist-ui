import type { IconDefinition } from '@minimalist-ui/core/icons/utils/types';
import { iconAliases } from '@minimalist-ui/core/icons/utils/iconAliases';

const registry: Record<string, IconDefinition> = {};
const aliases: Record<string, string> = { ...iconAliases };

export function registerIcon(icon: IconDefinition, aliasList: string[] = []) {
    const key = icon.displayName.toLowerCase();
    registry[key] = icon;

    for (const alias of aliasList) {
        aliases[alias.toLowerCase()] = key;
    }
}

export function registerIcons(icons: Array<{ icon: IconDefinition; aliases?: string[] }>) {
    for (const { icon, aliases: aliasList = [] } of icons) {
        registerIcon(icon, aliasList);
    }
}

export function getIcon(name: string): IconDefinition | undefined {
    const key = name.toLowerCase();
    const resolvedName = aliases[key] || key;
    return registry[resolvedName];
}

export const iconRegistry = registry;
export const iconAliasesRegistry = aliases;
