import { createIcon, Icon, type IconProps } from '@minimalist-ui/core';

export const minAlertOutline = createIcon({
    displayName: 'AlertOutline',
    viewBox: '0 0 24 24',
    paths: {
        outline: (
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3 2 20h20L12 3z" />
                <path d="M12 9v5" />
                <path d="M12 17h.01" />
            </g>
        )
    }
});

export const AlertIconOutline = (props: Omit<IconProps, 'icon'>) => <Icon icon={minAlertOutline} {...props} />;
