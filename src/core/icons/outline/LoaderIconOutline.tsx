import { createIcon } from '@minimalist-ui/core/icons/utils/createIcon.ts';
import { Icon } from '@minimalist-ui/core/components/icon/Icon';
import type { IconProps } from '@minimalist-ui/core/components/icon/types';

export const minLoaderOutline = createIcon({
    displayName: 'LoaderOutline',
    viewBox: '0 0 24 24',
    paths: {
        outline: (
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="M4.93 4.93l2.83 2.83" />
                <path d="M16.24 16.24l2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="M4.93 19.07l2.83-2.83" />
                <path d="M16.24 7.76l2.83-2.83" />
            </g>
        )
    }
});

export const LoaderIconOutline = (props: Omit<IconProps, 'icon'>) => <Icon icon={minLoaderOutline} {...props} />;
