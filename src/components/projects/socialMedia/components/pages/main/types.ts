export interface ProfileElements {
  user_id: string;
  imgSrc: string;
  posts: number;
  followers: number;
  following: number;
  nickName: string;
  intro: string;
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