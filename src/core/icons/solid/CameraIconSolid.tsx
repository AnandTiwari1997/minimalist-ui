import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minCameraSolid = createIcon({
  displayName: "CameraSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="4" y="7" width="16" height="10" rx="2" />
        <circle cx="12" cy="12" r="2.2" fill="white" />
        <rect x="7" y="5" width="3" height="3" rx="0.8" fill="white" />
      </g>
    ),
  },
});

export const CameraIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCameraSolid} {...props} />
);
