// src/components/Comment.js
import React, { useState, useEffect } from "react";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig"; // firebase 초기화한 파일

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // 댓글 불러오기
  useEffect(() => {
    if (!postId) return;
  
    const q = query(collection(db, "comments"), where("postId", "==", postId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsArray = [];
      querySnapshot.forEach((doc) => {
        commentsArray.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsArray);
    });
  
    return () => unsubscribe(); // 컴포넌트 언마운트 시 구독 해제
  }, [postId]);
  // 댓글 작성
  const handleAddComment = async () => {
    if (newComment.trim() === "") return;

    try {
      await addDoc(collection(db, "comments"), {
        postId,
        text: newComment,
        createdAt: new Date(), // Firestore에 저장되는 작성 시간
      });
      setNewComment(""); // 입력 필드 초기화
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  // 날짜 형식 변환 함수
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date.seconds * 1000).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <small>{comment.createdAt ? formatDate(comment.createdAt) : ""}</small>
          </li>
        ))}
      </ul>

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handleAddComment} disabled={!newComment.trim()}>
        Add Comment
      </button>
    </div>
  );
};

export default Comment;
