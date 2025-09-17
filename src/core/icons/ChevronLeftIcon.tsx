import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minChevronLeftSolid } from "@minimalist-ui/core/icons/solid/ChevronLeftIconSolid";
import { minChevronLeftOutline } from "@minimalist-ui/core/icons/outline/ChevronLeftIconOutline";

export const minChevronLeft = createIcon({
  displayName: "ChevronLeft",
  viewBox: "0 0 24 24",
  paths: {
    solid: minChevronLeftSolid.paths.solid,
    outline: minChevronLeftOutline.paths.outline,
  },
});

export const ChevronLeftIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronLeft} {...props} />
);
