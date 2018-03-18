export interface ContentsProperty {
  comments: number;
  liked: number;
  postId: string;
  thumbnailSrc: string;
}

export interface ContentModalProps {
  isShow: boolean;
  content: ContentsProperty;
  toggleModal: () => void;
}

export interface UserProfileProperties {
  profileImg: string;
  author: string;
}

// contentBox properties
export interface ContentBoxProps {
  message: string;
  author: string;
  commentList: Array<CommentListProperties>;
}

export interface MessageBoxProperties {
  message: string;
  author: string;
}

export interface CommentListProps {
  commentList: Array<CommentListProperties>;
}

interface CommentListProperties {
  commentId: string;
  comment: string;
  eventTime: number;
}

// ActionBox properties
export interface UserActionBoxProperties {
  likeList: Array<LikeListProperties>;
}

export interface IconListProperties {

}

export interface LikeListProperties {
  likerId: string;
  url: string;
  eventTime: number;
}

export interface LikeListContainerProperties {
  likeList: Array<LikeListProperties>;
}
