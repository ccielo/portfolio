import { InfoProperties } from '../types';
import * as React from 'react';

function InfoList (props: InfoProperties) {
  return(
    <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '77px'}}>
      <p style={{margin: 0, fontSize: '16px'}}>{props.label}</p>
      <p style={{margin: 0, fontSize: '16px', fontWeight: 'bold'}}>{props.info}</p>
    </span>
  );
}

export default InfoList;