import React, {Component} from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default (props) => {
  var color = props.color || 'green';

  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={color}/>
      </Sparklines>
    </div>
  );
}