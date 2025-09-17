import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minBatterySolid = createIcon({
  displayName: "BatterySolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="2" y="7" width="16" height="10" rx="2" />
        <rect x="18" y="10" width="2" height="4" rx="0.6" />
      </g>
    ),
  },
});

export const BatteryIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minBatterySolid} {...props} />
);
