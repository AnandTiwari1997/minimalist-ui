import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minCloudSolid } from "@minimalist-ui/core/icons/solid/CloudIconSolid";
import { minCloudOutline } from "@minimalist-ui/core/icons/outline/CloudIconOutline";

export const minCloud = createIcon({
  displayName: "Cloud",
  viewBox: "0 0 24 24",
  paths: {
    solid: minCloudSolid.paths.solid,
    outline: minCloudOutline.paths.outline,
  },
});

export const CloudIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCloud} {...props} />
);
