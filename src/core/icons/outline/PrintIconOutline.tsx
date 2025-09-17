import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minPrintOutline = createIcon({
  displayName: "PrintOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="5" y="4" width="14" height="6" rx="1" />
        <rect x="6" y="12" width="12" height="6" rx="1" />
      </g>
    ),
  },
});

export const PrintIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPrintOutline} {...props} />
);
