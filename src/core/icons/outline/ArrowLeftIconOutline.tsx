import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minArrowLeftOutline = createIcon({
  displayName: "ArrowLeftOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="12" x2="6" y2="12" />
        <polyline points="10,6 4,12 10,18" />
      </g>
    ),
  },
});

export const ArrowLeftIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowLeftOutline} {...props} />
);
