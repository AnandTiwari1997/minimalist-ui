import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minBatteryOutline = createIcon({
  displayName: "BatteryOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="2" y="7" width="16" height="10" rx="2" />
        <rect x="18" y="10" width="2" height="4" rx="0.6" />
        <rect x="4" y="9" width="10" height="6" rx="1" />
      </g>
    ),
  },
});

export const BatteryIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minBatteryOutline} {...props} />
);
