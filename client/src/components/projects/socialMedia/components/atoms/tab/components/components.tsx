import * as React from 'react';
import { LabelListComponentProps, ContentComponentProp } from '../types';
import { styles } from '../styles';

export function LabelListComponent(props: LabelListComponentProps) {
  const {labelList, selected, toggleTab} = props;
  return(
    <div style={styles.labelContainer}>
      {labelList.map((tab, index) => {
          if (index === selected) {
            return (
              <div key={`tab-${index}`}>
                <p
                  style={styles.activeLabel}
                  onClick={() => toggleTab(index)}
                >
                  {tab}
                </p>
              </div>
              );
            } else {
              return(
                <p 
                  key={`tab-${index}`}
                  style={styles.inactiveLabel}
                  onClick={() => toggleTab(index)}
                >
                  {tab}
                </p>
              );
            }
          })
        }
    </div>
  );
}

export function ContentComponent (props: ContentComponentProp) {
  const {childrenList} = props;
  return (
    <div> {childrenList} </div>
    );
}