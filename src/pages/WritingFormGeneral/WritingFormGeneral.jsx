import React, { useRef, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as P from './WritingFormGeneral.style';
import VerticalMenuSelector from '../../components/VerticalMenuSelector/VerticalMenuSelector';
import { menuItems } from './menuItems';
import Editor from '../../components/Editor/Editor';
import TitleForm from '../../components/Editor/TitleForm/TitleForm';

function Icon() {
  return (
    <P.IconContainer>
      <P.IconImage src="/icons/thumbs_up.svg" />
    </P.IconContainer>
  );
}

export default function WritingFormGeneral() {
  const editorRef = useRef(null);
  const [title, setTitle] = useState('');
  const [petType, setPetType] = useState(null);
  const [editorData, setEditorData] = useState(null);

  const navigate = useNavigate();

  const editorSubmitClickHandler = useCallback(async () => {
    if (editorRef.current) {
      const { editorInstance } = editorRef.current;
      const savedData = await editorInstance.save();

      // eslint-disable-next-line no-console
      console.log(savedData);

      const postData = {
        userId: 1,
        petType: petType,
        title: title,
        category: 'TIPS',
        blocks: savedData.blocks,
      };

      try {
        const response = await fetch(
          'http://ec2-3-37-97-6.ap-northeast-2.compute.amazonaws.com:8080/post/create/tip',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              accept: '*/*',
            },
            body: JSON.stringify(postData),
          },
        );

        const result = await response.json();

        if (result.isSuccess && result.code === 'COMMON200') {
          // eslint-disable-next-line no-alert
          alert('글이 등록되었습니다');
          navigate('/community/breederinformation');
        } else {
          // eslint-disable-next-line no-alert
          alert('글을 등록하는 데 오류가 발생했습니다.');
        }
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('글을 등록하는 데 오류가 발생했습니다.');
      }
    }
  }, [petType, title]);

  const handleTitleChange = useCallback((newTitle) => {
    setTitle(newTitle);
  }, []);

  const handleOptionSelect = useCallback((selectedOption) => {
    if (selectedOption === '강아지') setPetType('DOG');
    else if (selectedOption === '고양이') setPetType('CAT');
    else if (selectedOption === '전체') setPetType('ALL');
  }, []);

  const handleEditorChange = useCallback((data) => {
    setEditorData(data);
  }, []);

  const memoizedEditor = useMemo(
    () => (
      <Editor
        ref={editorRef}
        readMode={false}
        savedData={editorData}
        onChange={handleEditorChange}
      />
    ),
    [editorData, handleEditorChange],
  );

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
        <TitleForm
          onTitleChange={handleTitleChange}
          onOptionSelect={handleOptionSelect}
        />
        {memoizedEditor}
      </P.MainContainer>
    </P.Layout>
  );
}
