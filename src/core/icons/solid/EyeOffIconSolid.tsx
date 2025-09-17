import { createIcon } from "@minimalist-ui/core/icons/utils/createIcon.ts";
import { Icon } from "@minimalist-ui/core/components/icon/Icon.tsx";
import type { IconProps } from "@minimalist-ui/core/components/icon/types.ts";

export const minEyeOffSolid = createIcon({
  displayName: "EyeOffSolid",
  viewBox: "0 0 24 24",
  paths: {
    solid: (
      <g fill="currentColor">
        <path d="M2 2l20 20" stroke="white" />
        <path
          d="M1.5 12c2.5-5 8.5-7 10.5-7s8 2 10.5 7c-1.8 3.6-5.5 6.1-9 6.8"
          fill="currentColor"
        />
      </g>
    ),
  },
});

export const EyeOffIconSolid = (props: Omit<IconProps, "icon">) => (
  <Icon icon={minEyeOffSolid} {...props} />
);
