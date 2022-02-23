export declare const StyledBaseButton: import("styled-components").StyledComponent<"button", any, import("../../../DefaultPropTypes").Defaultize<import("prop-types").InferProps<{
    icon: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
    onClick: import("prop-types").Requireable<(...args: any[]) => any>;
    disabled: import("prop-types").Requireable<boolean>;
    iconPosition: import("prop-types").Requireable<typeof import("../enums").IconPositionEnum>;
    size: import("prop-types").Requireable<typeof import("../enums").ButtonSizeEnum>;
    isLoading: import("prop-types").Requireable<boolean>;
    loadingIcon: import("prop-types").Requireable<string>;
    children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
}>, {
    size: import("../enums").ButtonSizeEnum;
    disabled: boolean;
    iconPosition: import("../enums").IconPositionEnum;
    loading: boolean;
}>, never>;
