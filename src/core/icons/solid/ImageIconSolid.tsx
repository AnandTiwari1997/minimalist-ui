import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minImageSolid = createIcon({
  displayName: "ImageSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M5 17l5-6 6 8 6-6" fill="white" />
        <circle cx="17" cy="8" r="1.2" fill="white" />
      </g>
    ),
  },
});

export const ImageIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minImageSolid} {...props} />
);
