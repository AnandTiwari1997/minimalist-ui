import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minRefreshSolid } from "@minimalist-ui/core/icons/solid/RefreshIconSolid";
import { minRefreshOutline } from "@minimalist-ui/core/icons/outline/RefreshIconOutline";

export const minRefresh = createIcon({
  displayName: "Refresh",
  viewBox: "0 0 24 24",
  paths: {
    solid: minRefreshSolid.paths.solid,
    outline: minRefreshOutline.paths.outline,
  },
});

export const RefreshIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minRefresh} {...props} />
);
