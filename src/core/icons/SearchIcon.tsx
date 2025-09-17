import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minSearchSolid } from "@minimalist-ui/core/icons/solid/SearchIconSolid";
import { minSearchOutline } from "@minimalist-ui/core/icons/outline/SearchIconOutline";

export const minSearch = createIcon({
  displayName: "Search",
  viewBox: "0 0 24 24",
  paths: {
    solid: minSearchSolid.paths.solid,
    outline: minSearchOutline.paths.outline,
  },
});

export const SearchIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minSearch} {...props} />
);
