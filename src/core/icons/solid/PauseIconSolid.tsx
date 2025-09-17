import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minPauseSolid = createIcon({
  displayName: "PauseSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="7" y="5" width="3" height="14" rx="1" />
        <rect x="14" y="5" width="3" height="14" rx="1" />
      </g>
    ),
  },
});

export const PauseIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPauseSolid} {...props} />
);
