import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minWifiSolid = createIcon({
  displayName: "WifiSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <path d="M2 13c3-3 7-4 10-4s7 1 10 4l-3 3c-3-3-7-4-10-4s-7 1-10 4z" />
        <circle cx="12" cy="19" r="1.2" fill="white" />
      </g>
    ),
  },
});

export const WifiIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minWifiSolid} {...props} />
);
