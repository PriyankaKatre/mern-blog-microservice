import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  console.log("comments", comments);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments =
    comments.length > 0 &&
    comments?.map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
