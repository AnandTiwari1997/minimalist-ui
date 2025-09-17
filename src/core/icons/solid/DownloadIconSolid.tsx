import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minDownloadSolid = createIcon({
  displayName: "DownloadSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M4 3h16v4H4z M8 13l4 4 4-4H14V7H10v6z" fill="currentColor" />
    ),
  },
});

export const DownloadIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minDownloadSolid} {...props} />
);
