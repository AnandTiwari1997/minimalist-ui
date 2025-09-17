import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minChevronUpSolid } from "@minimalist-ui/core/icons/solid/ChevronUpIconSolid";
import { minChevronUpOutline } from "@minimalist-ui/core/icons/outline/ChevronUpIconOutline";

export const minChevronUp = createIcon({
  displayName: "ChevronUp",
  viewBox: "0 0 24 24",
  paths: {
    solid: minChevronUpSolid.paths.solid,
    outline: minChevronUpOutline.paths.outline,
  },
});

export const ChevronUpIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronUp} {...props} />
);
