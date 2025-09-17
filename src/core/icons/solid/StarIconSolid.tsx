import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minStarSolid = createIcon({
  displayName: "StarSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M12 3.5l2.3 4.7 5.2.8-3.7 3.6.9 5.1L12 16.8 7.3 18.5l.9-5.1L4.5 9.8l5.2-.8L12 3.5z"
        fill="currentColor"
      />
    ),
  },
});

export const StarIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minStarSolid} {...props} />
);
