import { createIcon } from '@minimalist-ui/core/icons/utils/createIcon.ts';
import { Icon } from '@minimalist-ui/core/components/icon/Icon';
import type { IconProps } from '@minimalist-ui/core/components/icon/types';

export const minInfoSolid = createIcon({
    displayName: 'InfoSolid',
    viewBox: '0 0 24 24',
    paths: {
        solid: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm1 7v7h-2v-7h2Zm-2.5-3.5h3V8h-3z" fill="currentColor" />
    }
});

export const InfoIconSolid = (props: Omit<IconProps, 'icon'>) => <Icon icon={minInfoSolid} {...props} />;
