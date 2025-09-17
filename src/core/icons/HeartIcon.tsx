import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minHeartSolid } from "@minimalist-ui/core/icons/solid/HeartIconSolid";
import { minHeartOutline } from "@minimalist-ui/core/icons/outline/HeartIconOutline";

export const minHeart = createIcon({
  displayName: "Heart",
  viewBox: "0 0 24 24",
  paths: {
    solid: minHeartSolid.paths.solid,
    outline: minHeartOutline.paths.outline,
  },
});

export const HeartIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minHeart} {...props} />
);
