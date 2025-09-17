import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon";
import { Icon } from "@minimalist-ui/core/components/icon/Icon";
import type { IconProps } from "@minimalist-ui/core/components/icon/types";
import { minLockSolid } from "@minimalist-ui/core/icons/solid/LockIconSolid";
import { minLockOutline } from "@minimalist-ui/core/icons/outline/LockIconOutline";

export const minLock = createIcon({
  displayName: "Lock",
  viewBox: "0 0 24 24",
  paths: {
    solid: minLockSolid.paths.solid,
    outline: minLockOutline.paths.outline,
  },
});

export const LockIcon = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minLock} {...props} />
);
