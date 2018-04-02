import * as React from 'react';
import { ContentModalProps, } from './types';
import styles from './styles';
import { UserProfileContainer, ContentBox, UserActionBox } from './components/components';
import Modal from '../../../../molecules/modal';
import Input from '../../../../atoms/input';

const postObj = {
  postImage: require('../../../../../../../../assets/images/postImage001.jpeg'),
  profileImage: require('../../../../../../../../assets/images/instaProfile.jpg'),
  author: 'buen_cielo',
  message: `.\n 한적해서 좋고\n 오랜만에 컴퓨터 말고 노트로\n 적으니 좋다!📚`,
  eventTime: 1521122794,
  likeList: [
    {
      likerId: 'a_user',
      url: '/a_user',
      eventTime: 1521122794,
    },
    {
      likerId: 'b_user',
      url: '/b_user',
      eventTime: 1521122794,
    },
    {
      likerId: 'c_user',
      url: '/c_user',
      eventTime: 1521122794,
    },
  ],
  commentList: [
    {
      commentId: 'c_user',
      comment: '어디에요?',
      eventTime: 1521122794,
    },
    {
      commentId: 'b_user',
      comment: '카페인듯?',
      eventTime: 1521122794,
    },
  ],
};

function ContentModal(props: ContentModalProps) {
  const { isShow } = props;
  return(
    <Modal isShow={isShow} onCloseRequest={props.toggleModal} modalStyles={styles.modalStyles}>
      <div style={styles.container} onClick={props.toggleModal}>
        <img height="573px" width="410px" src={postObj.postImage} />
        <div style={styles.information}>
          <UserProfileContainer author={postObj.author} profileImg={postObj.profileImage} />
          <ContentBox author={postObj.author} message={postObj.message} commentList={postObj.commentList} />
          <UserActionBox likeList={postObj.likeList} postTime={postObj.eventTime} />
          <Input placeholder="댓글달기 ..." />
        </div>
      </div>
    </Modal>
  );
}

export default ContentModal;