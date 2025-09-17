import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minRefreshOutline = createIcon({
  displayName: "RefreshOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20 7v5h-5" />
        <path d="M4 17v-5h5" />
        <path d="M7 10a7 7 0 0 1 10 0" />
      </g>
    ),
  },
});

export const RefreshIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minRefreshOutline} {...props} />
);
