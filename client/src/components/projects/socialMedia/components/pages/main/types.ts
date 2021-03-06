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

export interface ProfileElements {
  user_id: string;
  imgSrc: string;
  posts: number;
  followers: number;
  following: number;
  nickName: string;
  intro: string;
  list: Array<PostImageProperties>;
}

export interface InfoProperties {
  label: string;
  info: number;
}

export enum INFO_TYPE {
  posts = '게시물',
  followers = '팔로워',
  following = '팔로잉',
}

export interface ProfileHeaderProps {
  profileImage: string;
  profile: ProfileElements;
  ArrayCounting: Array<{label: string, number: number}>;
}

export interface PostImageProperties {
  postId: string;
  thumbnailSrc: string;
  comments: number;
  liked: number;
}

export interface GridListProps {
  postImageList: Array<PostImageProperties>;
  onClick: (selected: number) => void;
}