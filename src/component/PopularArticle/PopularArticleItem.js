import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/blog-img/news-1.jpg";
import "./PopularArticle.css";

const PopularArticleItem = ({ article }) => {
  const { Title, Category, img, desc, author, _id } = article;
  // console.log(" popular article : ", article);
  // redirect to article details page
  const goToDetails = useNavigate();
  const handleClick = () => {
    goToDetails(`/article/${article._id}`);
  };

  return (
    <div
      onClick={() => handleClick(_id)}
      class="hero border-b-2 pb-5 popular-card"
    >
      <div class="hero-content grid lg:grid-cols-2 md:grid-cols-1 p-0 ">
        <div>
          <img
            src={img}
            class="lg:max-w-sm md:max-w-sm w-full  rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="p-3 flex items-center">
          <div>
            <p className="text-sm">Jan 24, 2022</p>
            <h2 className="font-bold my-2 hover:text-primary duration-300 cursor-pointer">
              {Title}
            </h2>
            <p className="text-sm">
              {desc.slice(0, 100)}...
            </p>
            <div className="flex gap-5 items-center mt-5">
              <div className="avatar">
                <div className="lg:w-12 md:w-14 sm:w-16 w-14 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-sm cursor-pointer">
                  {author}
                </h2>
                <p className="text-sm font-medium">
                  <small>Study Power CEO</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArticleItem;
