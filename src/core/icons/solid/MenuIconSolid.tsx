import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minMenuSolid = createIcon({
  displayName: "MenuSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="4" y="6" width="16" height="2" />
        <rect x="4" y="11" width="16" height="2" />
        <rect x="4" y="16" width="16" height="2" />
      </g>
    ),
  },
});

export const MenuIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMenuSolid} {...props} />
);
