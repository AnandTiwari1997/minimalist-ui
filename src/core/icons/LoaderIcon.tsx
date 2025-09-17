import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minLoaderSolid } from "@minimalist-ui/core/icons/solid/LoaderIconSolid";
import { minLoaderOutline } from "@minimalist-ui/core/icons/outline/LoaderIconOutline";

export const minLoader = createIcon({
  displayName: "Loader",
  viewBox: "0 0 24 24",
  paths: {
    solid: minLoaderSolid.paths.solid,
    outline: minLoaderOutline.paths.outline,
  },
});

export const LoaderIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minLoader} {...props} />
);
