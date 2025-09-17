import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minPlayOutline = createIcon({
  displayName: "PlayOutline",
  viewBox: "0 0 24 24",
  paths: {
    outline: (
      <polygon
        points="8,5 19,12 8,19 8,5"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
  },
});

export const PlayIconOutline = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minPlayOutline} {...props} />
);
