import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minPlusSolid = createIcon({
  displayName: "PlusSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="10" y="5" width="4" height="14" />
        <rect x="5" y="10" width="14" height="4" />
      </g>
    ),
  },
});

export const PlusIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPlusSolid} {...props} />
);
