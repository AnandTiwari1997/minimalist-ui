import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minPlusSolid } from "@minimalist-ui/core/icons/solid/PlusIconSolid";
import { minPlusOutline } from "@minimalist-ui/core/icons/outline/PlusIconOutline";

export const minPlus = createIcon({
  displayName: "Plus",
  viewBox: "0 0 24 24",
  paths: {
    solid: minPlusSolid.paths.solid,
    outline: minPlusOutline.paths.outline,
  },
});

export const PlusIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPlus} {...props} />
);
