import * as React from 'react';
import { UserProfileProperties, MessageBoxProperties,
  IconListProperties, LikeListContainerProperties, LikeListProperties
} from '../types';
import styles from '../styles';
import Image from '../../../../../atoms/image';

export function UserProfileContainer (props: UserProfileProperties) {
  return(
    <div style={styles.userProfile}>
      <Image size={40} src={props.profileImg} style={{borderRadius: '50%'}} />
      <p style={{marginLeft: '12px'}}>{props.author}</p>
    </div>
  );
}

export function MessageBox (props: MessageBoxProperties) {
  return(
    <span style={{whiteSpace: 'pre-line'}}>
    <p style={{margin: 0, padding: 0}}>{props.author}</p>
    <p style={{margin: 0, padding: 0}}>{props.message}</p>
  </span>
  );
}

export function IconListContainer (props: IconListProperties) {
  return(
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <p onClick={() => alert('heart')} style={{margin: 0, padding: 0}}>heart</p>
        <p onClick={() => alert('comment')} style={{margin: 0, padding: 0, marginLeft: 8}}>comment</p>
      </div>
      <p onClick={() => alert('bookmark')} style={{margin: 0, padding: 0}} >bookmark</p>
    </div>
  );
}

export function LikeListContainer (props: LikeListContainerProperties) {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      {props.likeList.map((like: LikeListProperties) => {
        return(
        <div key={`${like.likerId}-key`}>
          {like.likerId}, 
        </div>
        );
      })}
    </div>
  );
}