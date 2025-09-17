import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minChevronRightSolid } from "@minimalist-ui/core/icons/solid/ChevronRightIconSolid";
import { minChevronRightOutline } from "@minimalist-ui/core/icons/outline/ChevronRightIconOutline";

export const minChevronRight = createIcon({
  displayName: "ChevronRight",
  viewBox: "0 0 24 24",
  paths: {
    solid: minChevronRightSolid.paths.solid,
    outline: minChevronRightOutline.paths.outline,
  },
});

export const ChevronRightIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronRight} {...props} />
);
