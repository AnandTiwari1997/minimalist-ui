import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minSearchOutline = createIcon({
  displayName: "SearchOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="6" />
        <line x1="17" y1="17" x2="21" y2="21" />
      </g>
    ),
  },
});

export const SearchIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minSearchOutline} {...props} />
);
