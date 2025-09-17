import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minLockSolid = createIcon({
  displayName: "LockSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <path d="M5 10h14v9a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 19V10z" />
        <path d="M8 10V8a4 4 0 0 1 8 0v2H8z" />
      </g>
    ),
  },
});

export const LockIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minLockSolid} {...props} />
);
