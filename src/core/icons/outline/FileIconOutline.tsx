import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minFileOutline = createIcon({
  displayName: "FileOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 2h8l4 4v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
        <polyline points="14,2 14,7 19,7" />
      </g>
    ),
  },
});

export const FileIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minFileOutline} {...props} />
);
