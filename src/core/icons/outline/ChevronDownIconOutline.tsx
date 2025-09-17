import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minChevronDownOutline = createIcon({
  displayName: "ChevronDownOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <polyline
        points="6,10 12,16 18,10"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const ChevronDownIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronDownOutline} {...props} />
);
