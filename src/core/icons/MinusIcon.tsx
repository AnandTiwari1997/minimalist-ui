import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minMinusSolid } from "@minimalist-ui/core/icons/solid/MinusIconSolid";
import { minMinusOutline } from "@minimalist-ui/core/icons/outline/MinusIconOutline";

export const minMinus = createIcon({
  displayName: "Minus",
  viewBox: "0 0 24 24",
  paths: {
    solid: minMinusSolid.paths.solid,
    outline: minMinusOutline.paths.outline,
  },
});

export const MinusIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMinus} {...props} />
);
