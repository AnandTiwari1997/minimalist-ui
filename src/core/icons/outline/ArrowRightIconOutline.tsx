import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minArrowRightOutline = createIcon({
  displayName: "ArrowRightOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="6" y1="12" x2="18" y2="12" />
        <polyline points="14,6 20,12 14,18" />
      </g>
    ),
  },
});

export const ArrowRightIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowRightOutline} {...props} />
);
