import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minEyeSolid = createIcon({
  displayName: "EyeSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <path d="M1.5 12c2.5-5 8.5-7 10.5-7s8 2 10.5 7c-2.5 5-8.5 7-10.5 7s-8-2-10.5-7z" />
        <circle cx="12" cy="12" r="2.2" fill="white" />
      </g>
    ),
  },
});

export const EyeIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minEyeSolid} {...props} />
);
