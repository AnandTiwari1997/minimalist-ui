import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minRefreshSolid = createIcon({
  displayName: "RefreshSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M20 7v5h-5v0a7 7 0 1 0 0 4h5v5h-5a9 9 0 1 1 0-14z"
        fill="currentColor"
      />
    ),
  },
});

export const RefreshIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minRefreshSolid} {...props} />
);
