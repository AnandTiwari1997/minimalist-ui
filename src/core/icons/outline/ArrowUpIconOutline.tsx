import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minArrowUpOutline = createIcon({
  displayName: "ArrowUpOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="18" x2="12" y2="6" />
        <polyline points="6,10 12,4 18,10" />
      </g>
    ),
  },
});

export const ArrowUpIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowUpOutline} {...props} />
);
