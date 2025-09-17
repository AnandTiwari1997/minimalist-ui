import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minMuteOutline = createIcon({
  displayName: "MuteOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 9v6h4l5 4V5L9 9H5z" />
        <line x1="18" y1="6" x2="22" y2="18" />
      </g>
    ),
  },
});

export const MuteIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMuteOutline} {...props} />
);
