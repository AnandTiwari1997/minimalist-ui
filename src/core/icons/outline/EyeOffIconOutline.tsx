import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minEyeOffOutline = createIcon({
  displayName: "EyeOffOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M1.5 12c2.5-5 8.5-7 10.5-7s8 2 10.5 7c-1.8 3.6-5.5 6.1-9 6.8" />
        <path d="M2 2l20 20" />
        <circle cx="12" cy="12" r="3" />
      </g>
    ),
  },
});

export const EyeOffIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minEyeOffOutline} {...props} />
);
