export interface inputGeneralProps{
    label: string;
    value: string;
    onChange: (newValue: string) => void;
    type: string;
    ref?: React.MutableRefObject<HTMLInputElement | null>;
    onKeyDown?: () => void;
}