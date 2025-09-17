import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minUploadSolid = createIcon({
  displayName: "UploadSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <path d="M4 17h16v4H4z M8 13l4-4 4 4H14v8H10v-8z" fill="currentColor" />
    ),
  },
});

export const UploadIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minUploadSolid} {...props} />
);
