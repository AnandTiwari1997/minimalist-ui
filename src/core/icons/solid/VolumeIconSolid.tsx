import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minVolumeSolid = createIcon({
  displayName: "VolumeSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M5 9v6h4l5 4V5L9 9H5z M16.5 8.5a6 6 0 0 1 0 7"
        fill="currentColor"
      />
    ),
  },
});

export const VolumeIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minVolumeSolid} {...props} />
);
