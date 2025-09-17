import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minWifiOutline = createIcon({
  displayName: "WifiOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M2 13c3-3 7-4 10-4s7 1 10 4" />
        <path d="M5 16c2-2 5-3 7-3s5 1 7 3" />
        <circle cx="12" cy="19" r="1.2" />
      </g>
    ),
  },
});

export const WifiIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minWifiOutline} {...props} />
);
