import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minPrintSolid = createIcon({
  displayName: "PrintSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <rect x="5" y="4" width="14" height="6" rx="1" />
        <rect x="6" y="12" width="12" height="6" rx="1" fill="white" />
      </g>
    ),
  },
});

export const PrintIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPrintSolid} {...props} />
);
