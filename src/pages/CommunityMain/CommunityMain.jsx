import * as S from './CommunityMain.style';
import PostPreviewCard from '../../components/PostPreviewCard/PostPreviewCard';
import VerticalMenuSelector from '../../components/VerticalMenuSelector/VerticalMenuSelector';
import { OrangeRightArrow } from '../../../public/img/ArrowIcon';
import thumbup from '../../../public/img/thumb_up.png';
import foot from '../../../public/img/foot.png';

function CommunityMain() {
  return (
    <S.Layout>
      <VerticalMenuSelector title="커뮤니티" items={menuItems} />

      <S.Container>
        <S.QuesInfoDailyContainer>
          <S.QuestionBoard>
            <S.BoardTitle>
              질문/고민
              <ExploreAll />
            </S.BoardTitle>
            <S.PostList>
              {postPreviewData.question.map((post, index) => (
                <PostPreviewCard key={index} {...post} />
              ))}
            </S.PostList>
          </S.QuestionBoard>

          <S.InfoDailyContainer>
            <S.InformationBoard>
              <S.BoardTitle>
                정보 공유 <ExploreAll />
              </S.BoardTitle>
              <S.PostList>
                {postPreviewData.information.map((post, index) => (
                  <PostPreviewCard key={index} {...post} />
                ))}
              </S.PostList>
            </S.InformationBoard>

            <S.DailyBoard>
              <S.BoardTitle>
                일상 이야기 <ExploreAll />
              </S.BoardTitle>
              <S.PostList>
                {postPreviewData.daily.map((post, index) => (
                  <PostPreviewCard key={index} {...post} />
                ))}
              </S.PostList>
            </S.DailyBoard>
          </S.InfoDailyContainer>
        </S.QuesInfoDailyContainer>

        <S.BreederTipsBoard>
          <S.TipTitleContainer>
            <S.TipBoardTitle>
              <S.Img src={thumbup} alt="thumb_up" />
              많은 저장을 이끌어낸 브리더의 꿀정보
            </S.TipBoardTitle>
            <ExploreAll />
          </S.TipTitleContainer>
          <S.PostList>
            {postPreviewData.breeder.map((post, index) => (
              <S.PostWrapper key={index}>
                <S.Index>{index + 1}</S.Index>
                <S.CardWrapper>
                  <PostPreviewCard key={index} {...post} />
                </S.CardWrapper>
              </S.PostWrapper>
            ))}
          </S.PostList>
        </S.BreederTipsBoard>

        <S.DogCatTipContainer>
          <S.DogTipBoard>
            <S.TipTitleContainer>
              <S.TipBoardTitle>
                <S.Img src={foot} alt="footIcon" />
                강아지 꿀정보
              </S.TipBoardTitle>
              <ExploreAll />
            </S.TipTitleContainer>
            <S.PostList>
              {postPreviewData.dog.map((post, index) => (
                <PostPreviewCard key={index} {...post} />
              ))}
            </S.PostList>
          </S.DogTipBoard>

          <S.CatTipBoard>
            <S.TipTitleContainer>
              <S.TipBoardTitle>
                <S.Img src={foot} alt="footIcon" />
                고양이 꿀정보
              </S.TipBoardTitle>
              <ExploreAll />
            </S.TipTitleContainer>
            <S.PostList>
              {postPreviewData.cat.map((post, index) => (
                <PostPreviewCard key={index} {...post} />
              ))}
            </S.PostList>
          </S.CatTipBoard>
        </S.DogCatTipContainer>
      </S.Container>
    </S.Layout>
  );
}

function ExploreAll() {
  return (
    <S.LinkText>
      전체보기
      <OrangeRightArrow />
    </S.LinkText>
  );
}

const postPreviewData = {
  question: [
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    {
      communityName: '질문/고민',
      postTitle: '이거 왜이러는 건가요?',
      postContent: '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 건가요?',
      postThumbnailSrc: '',
      viewCount: 159,
      commentCount: 13459,
      bookmarkCount: 1259,
    },
    // 추가 데이터...
  ],
  information: [
    {
      communityName: '정보 공유',
      postTitle: '강아지 사료 추천입니당',
      postContent:
        '이 정보는 무엇인보는 무엇인보는 무엇인보는 무엇인보는 무엇인는 무엇인가요?',
      postThumbnailSrc: '',
      viewCount: 20,
      commentCount: 5,
      bookmarkCount: 8,
    },
    {
      communityName: '정보 공유',
      postTitle: '강아지 사료 추천입니당',
      postContent:
        '이 정보는 무엇인보는 무엇인보는 무엇인보는 무엇인보는 무엇인는 무엇인가요?',
      postThumbnailSrc: '',
      viewCount: 20,
      commentCount: 5,
      bookmarkCount: 8,
    },
  ],
  daily: [
    {
      communityName: '일상 이야기',
      postTitle: '어제 간식 먹는 거 뺏었더니 아직까지 삐져있네요',
      postContent:
        '어제 간식 먹는 거 뺏었더니 아직까지 삐져있네요 하여튼 아주 ',
      postThumbnailSrc: '',
      viewCount: 50,
      commentCount: 20,
      bookmarkCount: 15,
    },
    {
      communityName: '일상 이야기',
      postTitle: '어제 간식 먹는 거 뺏었더니 아직까지 삐져있네요',
      postContent:
        '어제 간식 먹는 거 뺏었더니 아직까지 삐져있네요 하여튼 아주 ',
      postThumbnailSrc: '',
      viewCount: 50,
      commentCount: 20,
      bookmarkCount: 15,
    },
  ],
  breeder: [
    {
      communityName: '브리더의 꿀정보',
      postTitle: '고양이들이 이런 행동을 할 땐? 어떻게 해야할까요',
      postContent:
        '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 거예요? 라고들 많이 질문을 하십니다. 하지만 어떻게 해야할지는 다들 모르시죠. 저희 같은 경우엔 이렇게 합니다. 어떻게 하냐? 바로 이렇게요. 다들 어떤 도움을 줄 수 있냐 물어보는데 하기야 그럴 수도 있겠다는 생각이 들더라구요. 이럴 땐 굉장히 당황스럽',
      postThumbnailSrc: '',
      viewCount: 100,
      commentCount: 50,
      bookmarkCount: 30,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '고양이들이 이런 행동을 할 땐? 어떻게 해야할까요',
      postContent:
        '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 거예요? 라고들 많이 질문을 하십니다. 하지만 어떻게 해야할지는 다들 모르시죠. 저희 같은 경우엔 이렇게 합니다. 어떻게 하냐? 바로 이렇게요. 다들 어떤 도움을 줄 수 있냐 물어보는데 하기야 그럴 수도 있겠다는 생각이 들더라구요. 이럴 땐 굉장히 당황스럽',
      postThumbnailSrc: '',
      viewCount: 100,
      commentCount: 50,
      bookmarkCount: 30,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '고양이들이 이런 행동을 할 땐? 어떻게 해야할까요',
      postContent:
        '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 거예요? 라고들 많이 질문을 하십니다. 하지만 어떻게 해야할지는 다들 모르시죠. 저희 같은 경우엔 이렇게 합니다. 어떻게 하냐? 바로 이렇게요. 다들 어떤 도움을 줄 수 있냐 물어보는데 하기야 그럴 수도 있겠다는 생각이 들더라구요. 이럴 땐 굉장히 당황스럽',
      postThumbnailSrc: '',
      viewCount: 100,
      commentCount: 50,
      bookmarkCount: 30,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '고양이들이 이런 행동을 할 땐? 어떻게 해야할까요',
      postContent:
        '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 거예요? 라고들 많이 질문을 하십니다. 하지만 어떻게 해야할지는 다들 모르시죠. 저희 같은 경우엔 이렇게 합니다. 어떻게 하냐? 바로 이렇게요. 다들 어떤 도움을 줄 수 있냐 물어보는데 하기야 그럴 수도 있겠다는 생각이 들더라구요. 이럴 땐 굉장히 당황스럽',
      postThumbnailSrc: '',
      viewCount: 100,
      commentCount: 50,
      bookmarkCount: 30,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '고양이들이 이런 행동을 할 땐? 어떻게 해야할까요',
      postContent:
        '어제 밤부터 이상하게 침을 많이 흘리던데 왜 이러는 거예요? 라고들 많이 질문을 하십니다. 하지만 어떻게 해야할지는 다들 모르시죠. 저희 같은 경우엔 이렇게 합니다. 어떻게 하냐? 바로 이렇게요. 다들 어떤 도움을 줄 수 있냐 물어보는데 하기야 그럴 수도 있겠다는 생각이 들더라구요. 이럴 땐 굉장히 당황스럽',
      postThumbnailSrc: '',
      viewCount: 100,
      commentCount: 50,
      bookmarkCount: 30,
    },
  ],
  dog: [
    {
      communityName: '브리더의 꿀정보',
      postTitle: '강아지 사료 추천입니당',
      postContent:
        '저번 주부터 밥을 잘 안 먹었었는데 사료 바꾸고 나서 잘 먹기 시작했…',
      postThumbnailSrc: '',
      viewCount: 80,
      commentCount: 40,
      bookmarkCount: 25,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '강아지 사료 추천입니당',
      postContent:
        '저번 주부터 밥을 잘 안 먹었었는데 사료 바꾸고 나서 잘 먹기 시작했…',
      postThumbnailSrc: '',
      viewCount: 80,
      commentCount: 40,
      bookmarkCount: 25,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '강아지 사료 추천입니당',
      postContent:
        '저번 주부터 밥을 잘 안 먹었었는데 사료 바꾸고 나서 잘 먹기 시작했…',
      postThumbnailSrc: '',
      viewCount: 80,
      commentCount: 40,
      bookmarkCount: 25,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '강아지 사료 추천입니당',
      postContent:
        '저번 주부터 밥을 잘 안 먹었었는데 사료 바꾸고 나서 잘 먹기 시작했…',
      postThumbnailSrc: '',
      viewCount: 80,
      commentCount: 40,
      bookmarkCount: 25,
    },
  ],
  cat: [
    {
      communityName: '브리더의 꿀정보',
      postTitle: '고양이 사료 추천입니당',
      postContent:
        '저번 주부터 밥을 잘 안 먹었었는데 사료 바꾸고 나서 잘 먹기 시작했…',
      postThumbnailSrc: '',
      viewCount: 90,
      commentCount: 45,
      bookmarkCount: 27,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '고양이 사료 추천입니당',
      postContent:
        '저번 주부터 밥을 잘 안 먹었었는데 사료 바꾸고 나서 잘 먹기 시작했…',
      postThumbnailSrc: '',
      viewCount: 90,
      commentCount: 45,
      bookmarkCount: 27,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '고양이 사료 추천입니당',
      postContent:
        '저번 주부터 밥을 잘 안 먹었었는데 사료 바꾸고 나서 잘 먹기 시작했…',
      postThumbnailSrc: '',
      viewCount: 90,
      commentCount: 45,
      bookmarkCount: 27,
    },
    {
      communityName: '브리더의 꿀정보',
      postTitle: '고양이 사료 추천입니당',
      postContent:
        '저번 주부터 밥을 잘 안 먹었었는데 사료 바꾸고 나서 잘 먹기 시작했…',
      postThumbnailSrc: '',
      viewCount: 90,
      commentCount: 45,
      bookmarkCount: 27,
    },
  ],
};

const menuItems = [
  { name: '질문/고민', href: '/community/question' },
  { name: '정보 공유', href: '/community/information' },
  { name: '일상 이야기', href: '/community/daily' },
  { name: '브리더의 꿀정보', href: '/community/breederinformation' },
  { name: '브위더 후기', href: '/community/review' },
];

export default CommunityMain;
