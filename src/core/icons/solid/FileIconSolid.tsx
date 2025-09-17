import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minFileSolid = createIcon({
  displayName: "FileSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: <path d="M6 2h8l4 4v12a1 1 0 0 1-1 1H6V2z" fill="currentColor" />,
  },
});

export const FileIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minFileSolid} {...props} />
);
