import { Label, Input } from "./styles";
import { inputGeneralProps } from "../../interfaces/inputGeneralProps";

export default function InputGeneral({label, value, onChange, onKeyDown, type, ref}:inputGeneralProps) {
  return (
    <Label>
      <span>{label}</span>
      <Input
        type={type}
        value={value}
        onKeyDown={e => e.key === 'Enter'
         ? onKeyDown() && onKeyDown() 
         : undefined}
         ref={ref}
        onChange={e => onChange(e.target.value)}
      />
    </Label>
  );
}
