import React from "react";
import "./Post.css";
export default function Post() {
  const title = "Mindful Crafts";
  const summary =
    "Mindful crafts are accessible to people of all skill levels and ages. They do not require expensive materials or advanced skills, making them inclusive and adaptable to individual needs and preferences.This inclusivity encourages creativity and self-expression in a non-judgmental environment, allowing individuals to explore their artistic potential freely and at their own pace.";
  const coverURL =
    "https://www.thesprucecrafts.com/thmb/SZZ8B1xkhG50NeGIQoIR3VlPKxs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-621314378-a96e1066238b4dc687fa66be987e823c.jpg";
  const author = "Mounika";
  const postDate = "2023-01-29 17:55";

  return (
    <div className="post">
      {/* <h2 className="newblog">New Blog</h2> */}

      <img className="image" src={coverURL} alt={`Cover for ${title}`} />
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <span className="author">{author}</span>
          <time dateTime="2023-01-29T17:55">{postDate}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
