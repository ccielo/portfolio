import * as React from 'react';
import { PostImage } from '../../../atoms/image/image';
import { GridListProps, PostImageProperties } from '../types';

const styles = {
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 833,
    marginTop: 10,
    justifyContent: 'space-between',
  },
} as React.CSSProperties;

function GridList (props: GridListProps) {
  return(
    <div style={styles.gridList}>
      {props.postImageList.map((postImage: PostImageProperties, index) =>
      <div key={`post-${index}`} style={{marginBottom: 28}}>
        <PostImage
          src={postImage.thumbnailSrc}
          size={259}
          comments={postImage.comments}
          liked={postImage.liked}
        />
      </div>
      )}
    </div>
  );
}
export default GridList;