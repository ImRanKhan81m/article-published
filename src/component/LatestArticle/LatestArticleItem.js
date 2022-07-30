import React from "react";
import { useNavigate } from "react-router-dom";

const LatestArticleItem = ({ article }) => {
  // article distructuring
  const { Title, Category, img, desc, author, date, _id } = article;
  const goToDetails = useNavigate();
  const handleClick = () => {
    goToDetails(`/article/${article._id}`);
  };

  return (
    <div onClick={() => handleClick(_id)} className="card shadow-xl bg-neutral">
      <figure>
        <img
          className="w-full h-60"
          src={img}
          alt="blog"
        />
      </figure>
      <div className="card-body text-warning px-5 py-8">
        <div className="flex justify-between items-center">
          <div className="badge bg-primary ">Lifestyle</div>
          <div className="text-sm">Jan 24, 2022</div>
        </div>
        <h1 className="text-xl font-bold">{article?.Title?.slice(0, 30)}...</h1>
        <p className="text-sm">{article?.desc?.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default LatestArticleItem;
