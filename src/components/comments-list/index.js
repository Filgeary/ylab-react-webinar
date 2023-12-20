import { cn as bem } from "@bem-react/classname";
import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import CommentFallbackMessage from "../comment-fallback-message";
import CommentItem from "../comment-item";
import CommentTextArea from "../comment-text-area";
import "./style.css";

const CommentsList = ({ comments, t, onSubmit, isUserAuth, currentUserId, pathToLogin }) => {
  const cn = bem("CommentsList");
  const [showNewCommentTextArea, setShowNewCommentTextArea] = useState(true);
  const [showReplyComment, setShowReplyComment] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState('');

  const handleReply = useCallback((id) => {
    setShowReplyComment(true);
    setShowNewCommentTextArea(false);
    setSelectedItemId(id);
  }, [setShowReplyComment, setShowNewCommentTextArea, setSelectedItemId]);

  const handleCancel = useCallback(() => {
    setShowReplyComment(false);
    setShowNewCommentTextArea(true);
    setSelectedItemId('');
  }, [setShowReplyComment, setShowNewCommentTextArea, setSelectedItemId]);

  const handleSubmit = useCallback((text) => onSubmit(text, selectedItemId), [onSubmit, selectedItemId]);

  return (
    <section className={cn()}>
      <h2 className={cn("title")}>
        {t("comments.title")} ({comments.length || 0})
      </h2>

      {comments.length > 0 && (
        <ul className={cn("list")}>
          {comments.map((comment) => (
            <li key={comment._id} style={{ marginLeft: `${comment.level * 30}px` }}>
              <CommentItem
                t={t}
                isAuthorByCurrentUser={comment.author?._id === currentUserId}
                onReply={() => handleReply(comment._id)}
                styles={{ marginBottom: selectedItemId === comment._id ? "30px" : "0" }}
                {...comment}
              />

              {selectedItemId === comment._id &&
                showReplyComment &&
                (isUserAuth ? (
                  <CommentTextArea
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    isModeReply={true}
                    t={t}
                  />
                ) : (
                  <CommentFallbackMessage
                    isModeReply={true}
                    onCancel={handleCancel}
                    t={t}
                    pathToLogin={pathToLogin}
                  />
                ))}
            </li>
          ))}
        </ul>
      )}

      {showNewCommentTextArea &&
        (isUserAuth ? (
          <CommentTextArea onSubmit={handleSubmit} t={t} />
        ) : (
          <CommentFallbackMessage pathToLogin={pathToLogin} t={t} />
        ))}
    </section>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  t: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isUserAuth: PropTypes.bool.isRequired,
  currentUserId: PropTypes.string.isRequired,
  pathToLogin: PropTypes.string.isRequired,
};

export default memo(CommentsList);
