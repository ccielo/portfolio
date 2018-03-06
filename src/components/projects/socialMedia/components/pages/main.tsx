import * as React from 'react';
import { ReactNode } from 'react-redux';

interface MainProps {}

interface MainStates {
  profile: ProfileElements;
}

interface ProfileElements {
  user_id: string;
  imgSrc: string;
  posts: number;
  followers: number;
  following: number;
  nickName: string;
  intro: string;
}
interface InfoProperties {
  label: string;
  info: number;
}

function InfoList (props: InfoProperties) {
  return(
    <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '77px'}}>
      <p style={{margin: 0, fontSize: '16px'}}>{props.label}</p>
      <p style={{margin: 0, fontSize: '16px', fontWeight: 'bold'}}>{props.info}</p>
    </span>
  );
}

interface ViewProperties {
  isRow?: boolean;
  children: ReactNode;
  vertical?: 'center' | 'flex-start' | 'flex-end';
  horizontal?: 'center' | 'flex-start' | 'flex-end' |'space-between'| 'space-around';
  styles?: React.CSSProperties;
}

function View (props: ViewProperties) {
  const vertical = props.vertical;
  const horizontal = props.horizontal;
  return(
    <div
      style={{
        display: 'flex',
        flexDirection: props.isRow ? 'row' : 'column',
        alignItems: vertical,
        justifyContent: horizontal,
        margin: 0,
        padding: 0,
        ...props.styles,
      }}
    >
      {props.children}
    </div>
  );
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
    const  profileData = require('../../constants/data/profile.json');    
    this.setState({profile: profileData});
  }

  render() {
    const profileImage = require('../../../../../assets/images/instaProfile.jpg');
    const {profile} = this.state;
    return (
      <div>
        main
        <View
          isRow={true}
          vertical="center"
          horizontal="space-between"
          styles={{width: '833px', height: '152px', marginBottom: '44px'}}
        >
          <View
            horizontal="center"
            vertical="center"
            styles={{ width: '257px', marginRight: '30px'}}
          >
            <img
              src={profileImage}
              width={152}
              height={152}
              style={{borderRadius: '50%'}}
            />
          </View>
          <View horizontal="center" styles={{width: '546px', height: '152px', }}>
            <h1 style={{margin: 0, marginBottom: 20}}>{profile.user_id}</h1>
            <View isRow={true} styles={{margin: 0, marginBottom: 20}}>
              <InfoList label="게시물" info={profile.posts} />
              <InfoList label="팔로워" info={profile.followers} />
              <InfoList label="팔로잉" info={profile.following} />
            </View>
            <View styles={{margin: 0, marginBottom: 20}}>{profile.nickName}</View>
            <View styles={{margin: 0, marginBottom: 20}}>{profile.intro}</View>
          </View>
        </View>
      </div>
    );
  }
}

export default Main;