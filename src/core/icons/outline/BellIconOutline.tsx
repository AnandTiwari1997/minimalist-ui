import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minBellOutline = createIcon({
  displayName: "BellOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 16v-3a6 6 0 0 1 12 0v3l1 1v1H5v-1l1-1z" />
        <path d="M9 18a3 3 0 0 0 6 0" />
      </g>
    ),
  },
});

export const BellIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minBellOutline} {...props} />
);
