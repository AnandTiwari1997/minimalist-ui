import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minChevronRightOutline = createIcon({
  displayName: "ChevronRightOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <polyline
        points="10,6 16,12 10,18"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const ChevronRightIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minChevronRightOutline} {...props} />
);
