import ArrowUpButton from "./ArrowUpButton";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

// webアイコンも文字の一つなので、親のスタイルを継承する
const Template = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ArrowUpButton />
    </>
  );
};

export default Template;
