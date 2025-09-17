import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minStopOutline = createIcon({
  displayName: "StopOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <rect
        x="7"
        y="6"
        width="10"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const StopIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minStopOutline} {...props} />
);
