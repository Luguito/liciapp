export interface FontProps {
    fontStyle?: 'normal' | 'italic';
}
export interface TextStylesProps extends FontProps {
    strong?: boolean;
    small?: boolean;
}
export declare type FontColors = 'primary' | 'secondary' | 'hint' | 'error' | 'success' | 'action' | 'overDark';
export interface ParagraphProps extends TextStylesProps {
    fontColor?: FontColors;
}
