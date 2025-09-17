import { createIcon, Icon, type IconProps } from '@minimalist-ui/core';

export const minAlertSolid = createIcon({
    displayName: 'AlertSolid',
    viewBox: '0 0 24 24',
    paths: {
        solid: <path d="M12 3 2 20h20L12 3zm-1 6h2v6h-2zm0 7h2v2h-2z" fill="currentColor" />
    }
});

export const AlertIconSolid = (props: Omit<IconProps, 'icon'>) => <Icon icon={minAlertSolid} {...props} />;
