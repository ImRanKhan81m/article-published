import {
  faBookmark,
  faBurger,
  faDashboard,
  faEllipsis,
  faLink,
  faPlus,
  faSave,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import "./ArticleDetails.css";

const ArticleDetails = () => {
  const user = useAuthState(auth);
  // load article details by useParams
  const { articleId } = useParams();
  // fetch article details
  const [article, setArticle] = useState({});
  useEffect(() => {
    fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [articleId]);
  // distructuring article details
  const { Title, Category, img, desc, author } = article;
  // date format for article
  const date = new Date(article.date);
  const dateFormat = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  // add article to favourite
  // const [favourite, setFavourite] = useState(false);
  // useEffect(() => {
  //   if (user) {
  //     fetch(`https://floating-ocean-13139.herokuapp.com/favourite/${user.uid}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.includes(articleId)) {
  //           setFavourite(true);
  //         }
  //       });
  //   }
  // }, [articleId, user]);
  // const addFavourite = () => {
  //   if (user) {
  //     if (favourite) {
  //       fetch(
  //         `https://floating-ocean-13139.herokuapp.com/favourite/${user.uid}`,
  //         {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             articleId,
  //           }),
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setFavourite(false);
  //         });
  //     } else {
  //       fetch(
  //         `https://floating-ocean-13139.herokuapp.com/favourite/${user.uid}`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             articleId,
  //           }),
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setFavourite(true);
  //         });
  //     }
  //   }
  // };

  console.log(article);

  return (
    <section className="mid-container">
      <div className="flex justify-between ">
        <div className="flex items-center">
          <div class="avatar ">
            <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://placeimg.com/192/192/people?fbclid=IwAR3I707HDlKOYfnctNwHpvlQjBBW6yrRafMT-7gMxgjQOQH_urWgeQgWuK4"
                alt=""
              />
            </div>
          </div>
          <div className="ml-6">
            <p className="antialiased  text-lg  font-normal">
              {author}{" "}
              <span>
                <div class="badge badge-xs  badge-primary  ml-3 p-2">
                  Author
                </div>
              </span>
            </p>

            <p className="text-xs mt-2 font-medium ">
              published on : {dateFormat}
            </p>
          </div>
        </div>
        <div className="">
          <span>
            <FontAwesomeIcon
              className="icon text-secondary ml-4"
              icon={faShare}
            />
          </span>
          <span>
            <FontAwesomeIcon
              className="icon text-secondary ml-4"
              icon={faLink}
            />
          </span>

          <span>
            <FontAwesomeIcon
              className="icon text-secondary mx-4"
              icon={faEllipsis}
            />
          </span>
        </div>
      </div>

      <p className="text-2xl font-bold text-left my-8"> {Title}</p>
      <img
        className="w-full h-[70vh]"
        src="https://placeimg.com/192/192/people?fbclid=IwAR3I707HDlKOYfnctNwHpvlQjBBW6yrRafMT-7gMxgjQOQH_urWgeQgWuK4"
        alt=""
      />
      <blockquote>
        <p className="opacity-80">{desc}</p>
        <span className="block font-bold text-2xl mt-4 ">{Category}</span>
      </blockquote>
    </section>
  );
};

export default ArticleDetails;
