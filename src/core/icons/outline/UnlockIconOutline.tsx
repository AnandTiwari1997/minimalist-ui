import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minUnlockOutline = createIcon({
  displayName: "UnlockOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="5" y="10" width="14" height="9" rx="1.5" />
        <path d="M15 10V7a3 3 0 0 0-6 0" />
      </g>
    ),
  },
});

export const UnlockIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minUnlockOutline} {...props} />
);
