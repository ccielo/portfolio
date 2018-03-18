import * as React from 'react';
import { ContentModalProps, } from './types';
import styles from './styles';
import { UserProfileContainer, ContentBox, UserActionBox } from './components/components';
import Modal from '../../../../molecules/modal';

const postObj = {
  postImage: require('../../../../../../../../assets/images/postImage001.jpeg'),
  profileImage: require('../../../../../../../../assets/images/instaProfile.jpg'),
  author: 'buen_cielo',
  message: `.\n 한적해서 좋고\n 오랜만에 컴퓨터 말고 노트로\n 적으니 좋다!📚`,
  eventTime: 1521122794,
  likeList: [
    {
      likerId: 'dali310',
      url: '/dali310',
      eventTime: 1521122794,
    },
    {
      likerId: 'lovee_dandan',
      url: '/lovee_dandan',
      eventTime: 1521122794,
    },
    {
      likerId: 'comets_195',
      url: '/comets_195',
      eventTime: 1521122794,
    },
  ],
  commentList: [
    {
      commentId: 'comets_195',
      comment: '어디에요?',
      eventTime: 1521122794,
    },
  ],
};

function ContentModal(props: ContentModalProps) {
  const { isShow } = props;
  return(
    <Modal isShow={isShow} onClick={props.toggleModal} modalStyles={styles.modalStyles}>
      <div style={styles.container} onClick={props.toggleModal}>
        <img height="573px" width="410px" src={postObj.postImage} />
        <div style={styles.information}>
          <UserProfileContainer author={postObj.author} profileImg={postObj.profileImage} />
          <ContentBox author={postObj.author} message={postObj.message} commentList={postObj.commentList} />
          <UserActionBox likeList={postObj.likeList} />
        </div>
      </div>
    </Modal>
  );
}

export default ContentModal;