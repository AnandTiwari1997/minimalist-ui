import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minPlaySolid = createIcon({
  displayName: "PlaySolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: <polygon points="8,5 19,12 8,19 8,5" fill="currentColor" />,
  },
});

export const PlayIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPlaySolid} {...props} />
);
