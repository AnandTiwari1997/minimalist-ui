import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minSaveSolid = createIcon({
  displayName: "SaveSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <path d="M6 3h12v6H6z" />
        <rect x="5" y="9" width="14" height="10" rx="1.5" />
      </g>
    ),
  },
});

export const SaveIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minSaveSolid} {...props} />
);
