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

export interface MessageBoxProperties {
  message: string;
  author: string;
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
