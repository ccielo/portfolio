import * as React from 'react';
import { styles } from './styles';
import { ExpendingDivProps } from './types';

export default function ExpendingDiv(props: ExpendingDivProps) {
  return(
    <div onClick={() => props.onClick(props.idx, props.selected)}>
      <div style={styles.expendingDiv.titleContainer}>
        <p style={styles.expendingDiv.titleText}>
          [{props.idx + 1}] {props.list.issueTitle}
        </p>
      </div>
      {props.selected &&
        <div style={styles.expendingDiv.contentContainer}>
          <p style={{margin: 0, whiteSpace: 'pre'}}>
            {props.list.howToSolve}
          </p>
        </div>
      }
    </div>
  );
}