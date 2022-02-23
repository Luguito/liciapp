import ReactInputMask from 'react-input-mask';
export declare enum TEXT_ALIGN {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center"
}
export declare const LabelTxt: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Prefix: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const TxtPrefix: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const IconPrefix: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const IconSubfix: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const InputLabel: import("styled-components").StyledComponent<"label", any, import("../typographies/Typpographies.types").TextStylesProps & {
    showed: boolean;
}, never>;
export declare const input: import("styled-components").FlattenSimpleInterpolation;
export declare const Input: import("styled-components").StyledComponent<"input", any, {
    $withPrefix: boolean;
    $withIconPrefix: boolean;
    $textAlign?: TEXT_ALIGN | undefined;
}, never>;
export declare const InputWithMask: import("styled-components").StyledComponent<typeof ReactInputMask, any, {
    $withPrefix: boolean;
    $textAlign?: TEXT_ALIGN | undefined;
}, never>;
export declare const CurrencyInputField: import("styled-components").StyledComponent<any, any, object & {
    withPrefix: boolean;
    withIconPrefix: boolean;
}, string | number | symbol>;
export declare const TextArea: import("styled-components").StyledComponent<"textarea", any, {
    textAlign?: TEXT_ALIGN | undefined;
}, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", any, {
    error: boolean | null | undefined;
}, never>;
export declare const Container: import("styled-components").StyledComponent<"div", any, {
    width: string | null | undefined;
}, never>;
export declare const Helpers: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Hint: import("styled-components").StyledComponent<"label", any, import("../typographies/Typpographies.types").TextStylesProps, never>;
export declare const Error: import("styled-components").StyledComponent<"label", any, import("../typographies/Typpographies.types").TextStylesProps, never>;
export declare const StoryDiv: import("styled-components").StyledComponent<"div", any, {}, never>;
