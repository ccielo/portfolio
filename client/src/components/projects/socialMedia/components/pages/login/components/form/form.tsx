import * as React from 'react';

interface FormSectionProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>, t: string) => void;
  onSumbit: () => void;
}

function FormSection(props: FormSectionProps) {
  return(
    <form style={{display: 'flex', flexDirection: 'column' }}>
      <p>아이디</p>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => props.handleChange(e, 'id')}
      />
      <p>비밀번호</p>
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => props.handleChange(e, 'password')}
      />
      <button onClick={props.onSumbit}>
        login
      </button>
    </form>
  );
}

export default FormSection;