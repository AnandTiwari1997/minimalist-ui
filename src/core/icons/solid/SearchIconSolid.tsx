import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minSearchSolid = createIcon({
  displayName: "SearchSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <circle cx="11" cy="11" r="6" />
        <rect x="16" y="16" width="5" height="2" transform="rotate(45 16 16)" />
      </g>
    ),
  },
});

export const SearchIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minSearchSolid} {...props} />
);
