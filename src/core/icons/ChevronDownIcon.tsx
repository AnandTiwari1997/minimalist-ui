import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minChevronDownSolid } from "@minimalist-ui/core/icons/solid/ChevronDownIconSolid";
import { minChevronDownOutline } from "@minimalist-ui/core/icons/outline/ChevronDownIconOutline";

export const minChevronDown = createIcon({
  displayName: "ChevronDown",
  viewBox: "0 0 24 24",
  paths: {
    solid: minChevronDownSolid.paths.solid,
    outline: minChevronDownOutline.paths.outline,
  },
});

export const ChevronDownIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronDown} {...props} />
);
