import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minPrintSolid } from "@minimalist-ui/core/icons/solid/PrintIconSolid";
import { minPrintOutline } from "@minimalist-ui/core/icons/outline/PrintIconOutline";

export const minPrint = createIcon({
  displayName: "Print",
  viewBox: "0 0 24 24",
  paths: {
    solid: minPrintSolid.paths.solid,
    outline: minPrintOutline.paths.outline,
  },
});

export const PrintIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPrint} {...props} />
);
