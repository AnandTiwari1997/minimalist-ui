import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minCameraSolid } from "@minimalist-ui/core/icons/solid/CameraIconSolid";
import { minCameraOutline } from "@minimalist-ui/core/icons/outline/CameraIconOutline";

export const minCamera = createIcon({
  displayName: "Camera",
  viewBox: "0 0 24 24",
  paths: {
    solid: minCameraSolid.paths.solid,
    outline: minCameraOutline.paths.outline,
  },
});

export const CameraIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCamera} {...props} />
);
