import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minTrashOutline = createIcon({
  displayName: "TrashOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="3 7 5 7 21 7" />
        <path d="M8 7l1 12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2l1-12" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </g>
    ),
  },
});

export const TrashIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minTrashOutline} {...props} />
);
