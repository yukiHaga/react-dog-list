import styled from "styled-components";

const ContentWrapper = styled.section`
  display: flex;
  margin-bottom: 80px;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
  justify-content: space-around;
`;

const SentenceWrapper = styled.div``;

const Title = styled.h2`
  font-weight: bold;
  border-bottom: 4px solid #734e31;
`;

const ParagraphWrapper = styled.div``;

const Sentence = styled.p``;

const ImageWrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 320px;
  max-width: 100%;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <SentenceWrapper>
        <Title>Y'sカフェへようこそ</Title>
        <ParagraphWrapper>
          <Sentence>
            Y'sカフェは学芸大学前駅から徒歩5分、昔懐かしい雰囲気ただよう静かな路地の片隅にあります。
            <br />
            お客様がホッと一休みできる、安らぎのひとときを提供いたします。
          </Sentence>
          <Sentence>
            店内はWifiに対応していますので、どなたさまでもインターネットをご利用いただけます。
            <br />
            落ち着いた静かなカフェで、気分をリフレッシュしてみませんか？
          </Sentence>
        </ParagraphWrapper>
      </SentenceWrapper>
      <ImageWrapper>
        <Image src={`${process.env.PUBLIC_URL}/cafe.jpeg`} />
      </ImageWrapper>
    </ContentWrapper>
  );
};

export default Content;
