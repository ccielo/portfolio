import * as React from 'react';
import View from '../../../../components/atoms/view';
import { styles } from '../styles';
import InfoList from '../components/infoList';
import { ProfileHeaderProps } from '../types';

function ProfileHeader (props: ProfileHeaderProps) {
  const {profileImage, profile, ArrayCounting} = props;
  return(
    <View isRow={true} vertical="center" horizontal="space-between" styles={styles.profileContainer}>
      <View horizontal="center" vertical="center" styles={styles.imageContainer}>
        <img src={profileImage} width={152} height={152} style={styles.image} />
      </View>
      <View horizontal="center" styles={styles.profileInfoContainer}>
        <h1 style={styles.containerMargin}>{profile.user_id}</h1>
        <View isRow={true} styles={styles.containerMargin}>
          {ArrayCounting.map((info, index) => <InfoList key={`info-${index}`} label={info.label} info={info.number} />)}
        </View>
        <View styles={styles.containerMargin}>{profile.nickName}</View>
        <View styles={styles.containerMargin}>{profile.intro}</View>
      </View>
    </View>
  );
}

export default ProfileHeader;