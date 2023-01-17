import "./style.scss";

type Props = {
  url: string;
  title: string;
  description: string;
};

export const HomeCard01: React.FC<Props> = ({ description, title, url }) => {
  return (
    <div className="home-card-01">
      <div
        className="image"
        style={{ backgroundImage: `url('/assets/images/${url}')` }}
      ></div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};
