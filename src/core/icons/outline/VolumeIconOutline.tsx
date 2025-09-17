import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minVolumeOutline = createIcon({
  displayName: "VolumeOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 9v6h4l5 4V5L9 9H5z" />
        <path d="M16.5 8.5a6 6 0 0 1 0 7" />
      </g>
    ),
  },
});

export const VolumeIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minVolumeOutline} {...props} />
);
