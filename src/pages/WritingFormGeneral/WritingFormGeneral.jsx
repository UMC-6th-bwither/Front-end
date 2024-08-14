/* eslint-disable react/prop-types */
import { useRef } from 'react';
import * as P from './WritingFormGeneral.style';
import VerticalMenuSelector from '../../components/VerticalMenuSelector/VerticalMenuSelector';
import { menuItems } from './menuItems';
import Editor from '../../components/Editor/Editor';
import TitleForm from '../../components/Editor/TitleForm/TitleForm';
import dummyData from '../../components/Editor/dummyData';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/thumbs_up.svg" />
    </P.IconContainer>
  );
}

export default function WritingFormGeneral() {
  const editorRef = useRef(null);

  const editorSubmitClickHandler = async () => {
    if (editorRef.current) {
      const { editorInstance } = editorRef.current;
      const savedData = await editorInstance.save();

      // eslint-disable-next-line no-console
      console.log(savedData);
    }
  };

  return (
    <P.Layout>
      <VerticalMenuSelector
        title="커뮤니티"
        items={menuItems}
        activeItemName="브리더의 꿀정보"
      />
      <P.MainContainer>
        <Icon />
        <P.TitleLayout>
          <div>
            <P.MainTitle>브리더의 꿀정보</P.MainTitle>
            <P.MainSubTitle>
              브리더가 직접 알려주는 반려동물 꿀정보를 받아가세요
            </P.MainSubTitle>
          </div>
          <P.TitleButtonContainer>
            <P.Category $active onClick={editorSubmitClickHandler}>
              게시하기
            </P.Category>
          </P.TitleButtonContainer>
        </P.TitleLayout>
        <TitleForm />
        {/* <Editor ref={editorRef} savedData={dummyData} readMode /> */}
        <Editor ref={editorRef} />
      </P.MainContainer>
    </P.Layout>
  );
}
