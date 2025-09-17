import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minRewindOutline = createIcon({
  displayName: "RewindOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="14,5 8,12 14,19" />
        <polygon points="20,5 14,12 20,19" />
      </g>
    ),
  },
});

export const RewindIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minRewindOutline} {...props} />
);
