import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minArrowDownOutline = createIcon({
  displayName: "ArrowDownOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="6" x2="12" y2="18" />
        <polyline points="6,14 12,20 18,14" />
      </g>
    ),
  },
});

export const ArrowDownIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowDownOutline} {...props} />
);
