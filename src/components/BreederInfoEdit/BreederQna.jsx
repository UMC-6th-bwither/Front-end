import React, { useState, useImperativeHandle, useRef } from 'react';
import * as A from '../../pages/BreederInfoEdit/BreederInfoEdit.style';

const BreederQna = React.forwardRef((props, ref) => {
  const localRef = useRef();

  const [qnaAnswers, setQnaAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  useImperativeHandle(ref, () => ({
    getQnaData() {
      return qnaAnswers;
    },
    scrollIntoView(options) {
      if (localRef.current) {
        localRef.current.scrollIntoView(options);
      }
    },
  }));

  const handleInputChange = (e, key) => {
    setQnaAnswers((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  return (
    <div ref={localRef} style={{ marginBottom: '64px' }}>
      <A.InfoItem>
        <A.InfoTitle>자주 물어보는 질문</A.InfoTitle>
        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 분양한 동물의 건강 보증 기간은 얼마나 되나요?
          </A.InfoContentTitle2>
          <A.InfoInputContentBox
            type="text"
            placeholder="질문에 대한 답변을 작성해주세요"
            value={qnaAnswers.question1}
            onChange={(e) => handleInputChange(e, 'question1')}
          />
        </A.QnaBox>
        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 부모 동물의 혈통서를 볼 수 있을까요?{' '}
          </A.InfoContentTitle2>
          <A.InfoInputContentBox
            type="text"
            placeholder="질문에 대한 답변을 작성해주세요"
            value={qnaAnswers.question2}
            onChange={(e) => handleInputChange(e, 'question2')}
          />
        </A.QnaBox>

        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 새끼 동물을 반려하지 못하게 될 경우 반환 정책이 있나요?
          </A.InfoContentTitle2>
          <A.InfoInputContentBox
            type="text"
            placeholder="질문에 대한 답변을 작성해주세요"
            value={qnaAnswers.question3}
            onChange={(e) => handleInputChange(e, 'question3')}
          />
        </A.QnaBox>
        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 번식 계획이 있는 부모 강아지의 새끼 강아지를 분양 받으려면 보통
            어느 정도 기간이 소요되나요?
          </A.InfoContentTitle2>
          <A.InfoInputContentBox
            type="text"
            placeholder="질문에 대한 답변을 작성해주세요"
            value={qnaAnswers.question4}
            onChange={(e) => handleInputChange(e, 'question4')}
          />
        </A.QnaBox>
        <A.QnaBox>
          <A.InfoContentTitle2>
            Q. 동물을 데려온 후 어떤 지원을 받을 수 있나요?
          </A.InfoContentTitle2>
          <A.InfoInputContentBox
            type="text"
            placeholder="질문에 대한 답변을 작성해주세요"
            value={qnaAnswers.question5}
            onChange={(e) => handleInputChange(e, 'question5')}
          />
        </A.QnaBox>
      </A.InfoItem>
    </div>
  );
});

BreederQna.displayName = 'BreederQna';

export default BreederQna;
