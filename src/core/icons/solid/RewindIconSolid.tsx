import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minRewindSolid = createIcon({
  displayName: "RewindSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <polygon points="14,5 8,12 14,19" />
        <polygon points="20,5 14,12 20,19" />
      </g>
    ),
  },
});

export const RewindIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minRewindSolid} {...props} />
);
