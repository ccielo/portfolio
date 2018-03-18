import * as React from 'react';
import { UserProfileProperties, MessageBoxProperties, ContentBoxProps,
  IconListProperties, LikeListContainerProperties, LikeListProperties, CommentListProps, UserActionBoxProperties
} from '../types';
import styles from '../styles';
import Image from '../../../../../atoms/image';

export function UserProfileContainer (props: UserProfileProperties) {
  return(
    <div style={styles.userProfile}>
      <Image size={40} src={props.profileImg} style={{borderRadius: '50%'}} />
      <p style={{...styles.userId, marginLeft: '12px', }}>{props.author}</p>
    </div>
  );
}

export function ContentBox (props: ContentBoxProps) {
  return(
    <div style={styles.contentContainer}>
      <MessageBox author={props.author} message={props.message} />
      <CommentList commentList={props.commentList} />
    </div>
  );
}

function MessageBox (props: MessageBoxProperties) {
  return(
    <span style={{whiteSpace: 'pre-line'}}>
    <p style={{margin: 0, padding: 0, ...styles.userId}}>{props.author}</p>
    <p style={{margin: 0, padding: 0, ...styles.basicText}}>{props.message}</p>
  </span>
  );
}

function CommentList (props: CommentListProps) {
  return(
    <div>
      {props.commentList.map((comment) => {
        return(
          <div key={comment.commentId} style={styles.commentBox}>
          <div style={styles.commentsInfo}>
            <p style={{...styles.userId, marginRight: 10}}>{comment.commentId}</p>
            <p style={styles.basicText}>{comment.comment}</p>
          </div>
            <p onClick={() => alert('delete')} style={{...styles.basicText, flex: 0.05, cursor: 'pointer'}}>X</p>
          </div>
        );
      })}
    </div>
  );
}

export function UserActionBox (props: UserActionBoxProperties) {
  return(
    <div style={styles.borderBottomLine}>
      <IconListContainer />
      <LikeListContainer likeList={props.likeList} />
      <p style={{margin: 0}}>eventstamp</p>
    </div>
  );
}

export function IconListContainer (props: IconListProperties) {
  return(
    <div style={styles.iconListContainer}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <p onClick={() => alert('heart')} style={{margin: 0, padding: 0, cursor: 'pointer'}}>heart</p>
        <p onClick={() => alert('comment')} style={{margin: 0, padding: 0, marginLeft: 8, cursor: 'pointer'}}>comment</p>
      </div>
      <p onClick={() => alert('bookmark')} style={{margin: 0, padding: 0, cursor: 'pointer'}}>bookmark</p>
    </div>
  );
}

export function LikeListContainer (props: LikeListContainerProperties) {
  const length = props.likeList.length;
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      {props.likeList.map((like: LikeListProperties, index: number) => {
        return(
        <div key={`${like.likerId}-key`}>
          {length - 1 === index ?
            <p style={styles.userId}>{like.likerId} </p> : <p style={{...styles.userId, marginRight: 5}}>{like.likerId},</p>}
        </div>
        );
      })}
      이 좋아합니다.
    </div>
  );
}
