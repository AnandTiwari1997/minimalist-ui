import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minMinusSolid = createIcon({
  displayName: "MinusSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: <rect x="5" y="10" width="14" height="4" fill="currentColor" />,
  },
});

export const MinusIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMinusSolid} {...props} />
);
