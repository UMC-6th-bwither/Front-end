import * as A from './Agreement.style';
import beforeCheck from '/icons/signUp/check_before.svg';
import afterCheck from '/icons/signUp/check_after.svg';

export default function Agreement({ content, checked, onChange }) {
  return (
    <A.Container checked={checked}>
      <A.Content>{content}</A.Content>
      <A.CheckWrapper>
        <A.Checkbox type="checkbox" checked={checked} onChange={onChange} />
        <A.Check src={checked ? afterCheck : beforeCheck} />
        <A.Text>동의하기</A.Text>
      </A.CheckWrapper>
    </A.Container>
  );
}
