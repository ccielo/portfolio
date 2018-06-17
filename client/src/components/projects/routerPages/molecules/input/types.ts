
export interface InputProps {
  type: 'search' | 'multilne' | 'input';
  label: string;
  placeholder: string;
  autoSave?: boolean;
  onSave: (value: string) => void;
  errorMessage?: string;
  error?: boolean;
  security?: boolean;
}

export interface InputState {
  value: string;
  focus: boolean;
  enter: boolean;
}
export interface TextFieldProps {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  onToggleFocus: () => void;
  onPressEnter: () => void;
  error?: boolean;
  security?: boolean;
}
