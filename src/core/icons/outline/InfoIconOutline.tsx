import { createIcon } from '@minimalist-ui/core/icons/utils/createIcon.ts';
import { Icon } from '@minimalist-ui/core/components/icon/Icon';
import type { IconProps } from '@minimalist-ui/core/components/icon/types';

export const minInfoOutline = createIcon({
    displayName: 'InfoOutline',
    viewBox: '0 0 24 24',
    paths: {
        outline: (
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 10v7M12 7h.01" />
            </g>
        )
    }
});

export const InfoIconOutline = (props: Omit<IconProps, 'icon'>) => <Icon icon={minInfoOutline} {...props} />;
