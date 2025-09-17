import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minFastForwardOutline = createIcon({
  displayName: "FastForwardOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="10,5 16,12 10,19" />
        <polygon points="4,5 10,12 4,19" />
      </g>
    ),
  },
});

export const FastForwardIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minFastForwardOutline} {...props} />
);
