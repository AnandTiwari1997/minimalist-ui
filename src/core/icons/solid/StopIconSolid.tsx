import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minStopSolid = createIcon({
  displayName: "StopSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <rect x="7" y="6" width="10" height="12" rx="2" fill="currentColor" />
    ),
  },
});

export const StopIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minStopSolid} {...props} />
);
