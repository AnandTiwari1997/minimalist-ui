import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minCloudSolid = createIcon({
  displayName: "CloudSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path
        d="M6 16a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10 1 3.5 3.5 0 0 1 1 6"
        fill="currentColor"
      />
    ),
  },
});

export const CloudIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minCloudSolid} {...props} />
);
