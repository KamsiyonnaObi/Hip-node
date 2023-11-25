import { IComments } from "@/models/post.model";

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - createdAt.getTime();

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  // Calculate the time difference in different units
  const elapsed = {
    year: Math.floor(diffInMilliseconds / year),
    month: Math.floor(diffInMilliseconds / month),
    week: Math.floor(diffInMilliseconds / week),
    day: Math.floor(diffInMilliseconds / day),
    hour: Math.floor(diffInMilliseconds / hour),
    minute: Math.floor(diffInMilliseconds / minute),
  };

  // Determine the appropriate time unit
  if (elapsed.year > 0)
    return `${elapsed.year} year${elapsed.year > 1 ? "s" : ""} ago`;
  if (elapsed.month > 0)
    return `${elapsed.month} month${elapsed.month > 1 ? "s" : ""} ago`;
  if (elapsed.week > 0)
    return `${elapsed.week} week${elapsed.week > 1 ? "s" : ""} ago`;
  if (elapsed.day > 0)
    return `${elapsed.day} day${elapsed.day > 1 ? "s" : ""} ago`;
  if (elapsed.hour > 0)
    return `${elapsed.hour} hour${elapsed.hour > 1 ? "s" : ""} ago`;
  if (elapsed.minute > 0)
    return `${elapsed.minute} minute${elapsed.minute > 1 ? "s" : ""} ago`;

  return "just now";
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

export function countComments(comments: IComments[]) {
  let total = 0;
  comments.forEach((comment) => {
    total++;
    function countReplies(comment: IComments) {
      if (comment.replies) {
        total += comment.replies.length;
        comment.replies.forEach(countReplies);
      }
    }

    countReplies(comment);
  });

  return total;
}

export function hasUserReply({
  comments,
  userId,
}: {
  comments: IComments[] | undefined;
  userId: string;
}) {
  if (comments) {
    for (const comment of comments) {
      // Check current comment for userId
      if (JSON.stringify(comment?.userId) === userId) {
        return true;
      }

      if (comment.replies) {
        for (const reply of comment.replies) {
          if (hasUserReply({ comments: reply.replies, userId })) {
            return true;
          }
        }
      }
    }
  }
  return false;
}
