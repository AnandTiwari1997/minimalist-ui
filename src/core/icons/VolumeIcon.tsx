import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minVolumeSolid } from "@minimalist-ui/core/icons/solid/VolumeIconSolid";
import { minVolumeOutline } from "@minimalist-ui/core/icons/outline/VolumeIconOutline";

export const minVolume = createIcon({
  displayName: "Volume",
  viewBox: "0 0 24 24",
  paths: {
    solid: minVolumeSolid.paths.solid,
    outline: minVolumeOutline.paths.outline,
  },
});

export const VolumeIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minVolume} {...props} />
);
