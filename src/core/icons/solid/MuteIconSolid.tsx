import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minMuteSolid = createIcon({
  displayName: "MuteSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M5 9v6h4l5 4V5L9 9H5z M18 6l4 12-2 1-4-12 2-1z"
        fill="currentColor"
      />
    ),
  },
});

export const MuteIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minMuteSolid} {...props} />
);
