import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minCheckOutline = createIcon({
  displayName: "CheckOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <path
        d="M3.5 12.5l3 3 6-6 7 7"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const CheckIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCheckOutline} {...props} />
);
