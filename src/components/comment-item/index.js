import { cn as bem } from "@bem-react/classname";
import PropTypes from "prop-types";
import { memo } from "react";
import formatDate from "../../utils/format-date";
import "./style.css";

const CommentItem = ({
  author,
  text,
  dateCreate,
  onReply,
  t,
  styles,
  isAuthorByCurrentUser,
}) => {
  const cn = bem("CommentItem");

  return (
    <div className={cn()} style={styles}>
      <div>
        <span
          className={cn("user-name", { "current-user": isAuthorByCurrentUser })}
        >
          {author?.profile?.name}
        </span>
        <span className={cn("date")}>{formatDate(dateCreate)}</span>
      </div>

      <p className={cn("text")}>{text}</p>
      <button className={cn("reply")} onClick={onReply}>
        {t("comment.reply")}
      </button>
    </div>
  );
};

CommentItem.propTypes = {
  author: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  dateCreate: PropTypes.string.isRequired,
  onReply: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  isAuthorByCurrentUser: PropTypes.bool.isRequired,
  styles: PropTypes.object,
};

export default memo(CommentItem);
