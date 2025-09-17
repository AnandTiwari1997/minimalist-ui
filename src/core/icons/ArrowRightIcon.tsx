import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minArrowRightSolid } from "@minimalist-ui/core/icons/solid/ArrowRightIconSolid";
import { minArrowRightOutline } from "@minimalist-ui/core/icons/outline/ArrowRightIconOutline";

export const minArrowRight = createIcon({
  displayName: "ArrowRight",
  viewBox: "0 0 24 24",
  paths: {
    solid: minArrowRightSolid.paths.solid,
    outline: minArrowRightOutline.paths.outline,
  },
});

export const ArrowRightIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minArrowRight} {...props} />
);
