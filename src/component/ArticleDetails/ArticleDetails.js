import {
  faBookmark,
  faBurger,
  faDashboard,
  faEllipsis,
  faLink,
  faPlus,
  faSave,
  faShare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import "./ArticleDetails.css";
import { articleDataContext } from "../../App";
import Comment from "./Comment/Comment";
import { data } from "autoprefixer";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const [upsertCount, setUpsertCount] = useState(false);
  const valueObj = useContext(articleDataContext);
  const { signedInUser } = valueObj;

  // fetch article details
  const [article, setArticle] = useState({});
<<<<<<< HEAD
  const { Title, category, img, desc, date, likes, comments } = article;
  // console.log(article);
=======
  const author = article?.signedInUser?.userInfo?.name;
>>>>>>> 2a33331d82915d859ddb432b1d8b141024cb54d0

  useEffect(() => {
    fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [articleId, article]);
<<<<<<< HEAD
  // console.log(articleId);

  // console.log(likes)
=======
>>>>>>> 2a33331d82915d859ddb432b1d8b141024cb54d0

  // today's date
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const todayDate = `${yyyy}-${mm}-${dd}`;

  //Handle Like button
  const handleLike = (id) => {
    if (
      article?.likes.includes(signedInUser?._id) === false &&
      signedInUser?._id !== undefined
    ) {
      // console.log([...article.blogs.likes, signedInUser._id])
      fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: [...article?.likes, signedInUser._id],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.acknowledged && article?.likes.includes(id)) {
            setUpsertCount(true);
          } else {
            setUpsertCount(false);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please login to like this article");
    }
  };

  //Handle Unlike button
  const handleUnlike = (id) => {
    if (article?.likes.includes(signedInUser._id)) {
      fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: article?.likes?.filter(like => like !== signedInUser._id),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged && article?.likes.includes(id)) {
            setUpsertCount(true);
          } else {
            setUpsertCount(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // console.log(article?.likes)

  // handle comment button
  const handleComment = (e) => {
    e.preventDefault();
    // input value
    const comment = e.target.comment.value;
    // console.log(comment);
<<<<<<< HEAD

    if (!signedInUser) {
      alert("Please login to comment");
    } else {
      // send comment to server with user info
      fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comments: [...article.comments, { comment, author: signedInUser }],
        }),
=======
    // clear input value
    e.target.comment.value = "";
    // send comment to server with user info
    fetch(`https://floating-ocean-13139.herokuapp.com/blogs/${articleId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: [...article?.comments, { comment, author: signedInUser }],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setUpsertCount(true);
        } else {
          setUpsertCount(false);
        }
>>>>>>> 2a33331d82915d859ddb432b1d8b141024cb54d0
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.acknowledged) {
            setUpsertCount(true);
            // clear input value
            e.target.comment.value = "";
          } else {
            setUpsertCount(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };



  return (
    <div className="mid-container">
      <section>
        <div className="flex justify-between ">
          <div className="flex items-center">
            <div className="avatar ">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://placeimg.com/192/192/people?fbclid=IwAR3I707HDlKOYfnctNwHpvlQjBBW6yrRafMT-7gMxgjQOQH_urWgeQgWuK4"
                  alt=""
                />
              </div>
            </div>
            <div className="ml-6">
              <p className="antialiased  text-lg  font-normal">
                {"MD. Mozammel Hoq 🌚"}{" "}
                <span>
                  <div className="badge badge-xs  badge-primary  ml-3 p-2">
                    Author
                  </div>
                </span>
              </p>

<<<<<<< HEAD
              <p className="text-xs mt-2 font-medium ">Published: {date}</p>
=======
              <p className="text-xs mt-2 font-medium ">
                {/* Published: {date ? date : todayDate} */}
              </p>
>>>>>>> 2a33331d82915d859ddb432b1d8b141024cb54d0
            </div>
          </div>
          <div className=" breadcrumbs">
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="icon text-secondary ml-4 "
                    title="Share"
                    icon={faShareNodes}
                  />
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="icon text-secondary ml-4"
                    title="Copy"
                    icon={faLink}
                  />
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="icon text-secondary mx-4"
                    title="More"
                    icon={faEllipsis}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-2xl font-bold text-left my-8"> {article?.blogs?.Title}</p>
        <img
<<<<<<< HEAD
          className="w-full lg:h-[70vh] md:h[50vh] sm:h[50vh] "
          src={img}
=======
          className="w-full lg:h-[70vh] md:h[50vh] sm:h[50vh] object-cover"
          src={article?.blogs?.img}
>>>>>>> 2a33331d82915d859ddb432b1d8b141024cb54d0
          alt=""
        />
        <div className="flex items-center  mt-5">
          <p className="text-primary mr-4">{article?.likes?.length} likes</p>
          {article?.likes?.includes(signedInUser?._id) || upsertCount ? (
            <IoMdThumbsDown
              className="thumbs_down h-8 w-8 cursor-pointer"
              onClick={() => handleUnlike(articleId)}
            />
          ) : (
            <IoMdThumbsUp
              className="thumbs_up mr-2 h-8 w-8 cursor-pointer"
              onClick={() => handleLike(articleId)}
            />
          )}
        </div>
        <blockquote>
<<<<<<< HEAD
          <p className="opacity-80">{desc}</p>
          <span className="block font-bold text-2xl mt-4 ">{category}</span>
=======
          <p className="opacity-80">{article?.blogs?.desc}</p>
          <span className="block font-bold text-2xl mt-4 ">{article?.blogs?.Category}</span>
>>>>>>> 2a33331d82915d859ddb432b1d8b141024cb54d0
        </blockquote>
      </section>
      <h1 className="mb-4"> Recent comments - </h1>
      <section>
<<<<<<< HEAD
        {comments?.slice(-3).map((comment, index) => (
          <Comment key={index} comment={comment}></Comment>
=======
        {article?.comments?.slice(-3).reverse().map((comment) => (
          <Comment comment={comment}></Comment>
>>>>>>> 2a33331d82915d859ddb432b1d8b141024cb54d0
        ))}
        <button >Show more</button>
      </section>
      <section>
        <form
          onSubmit={handleComment}
          className="flex flex-col  items-center space-y-6"
        >
          <textarea
            className="textarea textarea-primary w-full max-w-md"
            placeholder="Drop Your Comment Here"
            name="comment"
            required
          ></textarea>
          <button
            className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            type="submit"
          >
            Post Comment
          </button>
        </form>
      </section>
    </div>
  );
};

export default ArticleDetails;
