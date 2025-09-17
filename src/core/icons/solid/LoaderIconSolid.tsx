import { createIcon } from '@minimalist-ui/core/icons/utils/createIcon.ts';
import { Icon } from '@minimalist-ui/core/components/icon/Icon';
import type { IconProps } from '@minimalist-ui/core/components/icon/types';

export const minLoaderSolid = createIcon({
    displayName: 'LoaderSolid',
    viewBox: '0 0 24 24',
    paths: {
        solid: <path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" fill="currentColor" />
    }
});

export const LoaderIconSolid = (props: Omit<IconProps, 'icon'>) => <Icon icon={minLoaderSolid} {...props} />;
