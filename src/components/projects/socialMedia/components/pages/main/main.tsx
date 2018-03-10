import * as React from 'react';
import { ProfileElements, INFO_TYPE } from './types';
import ProfileHeader from './components/profileHeader';
import GridList from './components/gridList';
import Line from '../../atoms/line';
import Tab from '../../atoms/tab';

interface MainProps {
}

interface MainStates {
  profile: ProfileElements;
  tab: number;
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
    const PostComponent = <GridList postImageList={this.state.profile.list} />;
    const SavedComponent = <div>saved component</div>;

    return (
      <div style={{width: '833px'}}>
        <ProfileHeader profileImage={profileImage} profile={profile} ArrayCounting={ArrayCounting} />
        <Line color="gray" thickness={1} length="100%" />
        <Tab
          arrayList={[
            {
              label: 'first',
              children: PostComponent,
            },
            {
              label: 'second',
              children: SavedComponent,
            }
          ]}
          onSelect={this.onSelectTab}
        />
        <GridList postImageList={this.state.profile.list} />
      </div>
    );
  }

  private onSelectTab = (value: number) => {
    alert(`hi, ${value}`);
    this.setState({tab: value});
  }

}

export default Main;