import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minArrowLeftSolid } from "@minimalist-ui/core/icons/solid/ArrowLeftIconSolid";
import { minArrowLeftOutline } from "@minimalist-ui/core/icons/outline/ArrowLeftIconOutline";

export const minArrowLeft = createIcon({
  displayName: "ArrowLeft",
  viewBox: "0 0 24 24",
  paths: {
    solid: minArrowLeftSolid.paths.solid,
    outline: minArrowLeftOutline.paths.outline,
  },
});

export const ArrowLeftIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowLeft} {...props} />
);
