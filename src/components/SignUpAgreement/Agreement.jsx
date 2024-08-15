import * as A from './Agreement.style';

export default function Agreement({ content, checked, onChange }) {
  return (
    <A.Container checked={checked}>
      <A.Content>{content}</A.Content>
      <A.CheckWrapper>
        <A.Checkbox type="checkbox" checked={checked} onChange={onChange} />
        <A.Text>동의하기</A.Text>
      </A.CheckWrapper>
    </A.Container>
  );
}
