import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minChevronLeftOutline = createIcon({
  displayName: "ChevronLeftOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <polyline
        points="14,6 8,12 14,18"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const ChevronLeftIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronLeftOutline} {...props} />
);
