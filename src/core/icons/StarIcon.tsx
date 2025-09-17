import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minStarSolid } from "@minimalist-ui/core/icons/solid/StarIconSolid";
import { minStarOutline } from "@minimalist-ui/core/icons/outline/StarIconOutline";

export const minStar = createIcon({
  displayName: "Star",
  viewBox: "0 0 24 24",
  paths: {
    solid: minStarSolid.paths.solid,
    outline: minStarOutline.paths.outline,
  },
});

export const StarIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minStar} {...props} />
);
