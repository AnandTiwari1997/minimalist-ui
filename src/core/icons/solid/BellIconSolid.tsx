import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minBellSolid = createIcon({
  displayName: "BellSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M6 16v-3a6 6 0 0 1 12 0v3l1 1v1H5v-1l1-1z M9 19a3 3 0 0 0 6 0"
        fill="currentColor"
      />
    ),
  },
});

export const BellIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minBellSolid} {...props} />
);
