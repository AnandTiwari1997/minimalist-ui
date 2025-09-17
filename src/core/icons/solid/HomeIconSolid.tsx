import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minHomeSolid = createIcon({
  displayName: "HomeSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M3 11.5 L12 4 L21 11.5 L21 20.5 H3 Z" fill="currentColor" />
    ),
  },
});

export const HomeIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minHomeSolid} {...props} />
);
