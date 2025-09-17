import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minCameraOutline = createIcon({
  displayName: "CameraOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="4" y="7" width="16" height="10" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <rect x="7" y="5" width="3" height="3" rx="0.8" />
      </g>
    ),
  },
});

export const CameraIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCameraOutline} {...props} />
);
