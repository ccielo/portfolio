import * as React from 'react';
import { ProfileElements, INFO_TYPE } from './types';
import ProfileHeader from './components/profileHeader';

interface MainProps {
}

interface MainStates {
  profile: ProfileElements;
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
      },
    };
  }

  componentDidMount() {
    const  profileData = require('../../../constants/data/profile.json');
    this.setState({profile: profileData});
  }

  render() {
    const profileImage = require('../../../../../../assets/images/instaProfile.jpg');
    const {profile} = this.state;
    const ArrayCounting = [
      {label: INFO_TYPE.posts, number: profile.posts},
      {label: INFO_TYPE.followers, number: profile.followers},
      {label: INFO_TYPE.following, number: profile.following},
    ];

    return (
      <div>
        <ProfileHeader profileImage={profileImage} profile={profile} ArrayCounting={ArrayCounting} />
      </div>
    );
  }
}

export default Main;