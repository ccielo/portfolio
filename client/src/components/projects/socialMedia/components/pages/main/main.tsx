import * as React from 'react';
import { ProfileElements, INFO_TYPE } from './types';
import ProfileHeader from './components/profileHeader';
import GridList from './components/gridList';
import Line from '../../atoms/line';
import ContentModal from './components/contentModal/';

interface MainProps {
}

interface MainStates {
  profile: ProfileElements;
  tab: number;
  isShow: boolean;
  selected: number;
}

class Main extends React.Component<MainProps, MainStates> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      profile: {
        user_id: '',
        imgSrc: '',
        posts: 0,
        followers: 0,
        following: 0,
        nickName: '',
        intro: '',
        list: [],
      },
      tab: 0,
      isShow: true,
      selected: 0,
    };
    this.onSelectPost = this.onSelectPost.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const  profileData = require('../../../constants/data/profile.json');
    this.setState({profile: profileData});
  }

  onSelectPost(selected: number) {
    this.setState({ selected: selected, isShow: true });
  }

  toggleModal() {
    this.setState({isShow: !this.state.isShow});
  }

  render() {
    const profileImage = require('../../../../../../assets/images/instaProfile.jpg');
    const {profile, isShow, selected} = this.state;
    const ArrayCounting = [
      {label: INFO_TYPE.posts, number: profile.posts},
      {label: INFO_TYPE.followers, number: profile.followers},
      {label: INFO_TYPE.following, number: profile.following},
    ];
    return (
      <div style={{width: '833px'}}>
        <ProfileHeader profileImage={profileImage} profile={profile} ArrayCounting={ArrayCounting} />
        <Line color="gray" thickness={1} length="100%" />
        <GridList postImageList={profile.list} onClick={this.onSelectPost} />
        <ContentModal isShow={isShow} content={profile.list[selected]} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default Main;