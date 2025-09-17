import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minFastForwardSolid = createIcon({
  displayName: "FastForwardSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <polygon points="10,5 16,12 10,19" />
        <polygon points="4,5 10,12 4,19" />
      </g>
    ),
  },
});

export const FastForwardIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minFastForwardSolid} {...props} />
);
