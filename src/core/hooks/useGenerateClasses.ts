export function useGenerateClasses(includeRoot: boolean = true) {
    return (
        base: string,
        config: {
            parts?: string[];
            variants?: { [P: string]: string | boolean };
        } = {}
    ): { [p: string]: string } => {
        const classes: { [key: string]: string } = {};

        for (const element of config.parts ?? []) {
            classes[element as string] = `${base}--${String(element)}`;
        }

        for (const key in config.variants) {
            const value = config.variants[key];

            if (value) {
                if (typeof value === 'boolean') {
                    classes[key] = `${base}--${key}`;
                } else {
                    classes[key] = `${base}--${key}-${String(value)}`;
                }
            }
        }

        return includeRoot ? { base: `minimalist-ui`, root: `${base}--root`, ...classes } : { ...classes };
    };
}
