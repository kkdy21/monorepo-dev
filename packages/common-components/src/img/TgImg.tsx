type ImgProps = {
  url: string;
};

const TgImg = ({ url }: ImgProps) => {
  return <img src={`/images/${url}`} />;
};

export { TgImg };
