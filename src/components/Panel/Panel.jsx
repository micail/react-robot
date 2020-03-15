import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './Panel.scss';

const Panel = ({ commands }) => {
  return (
    <div className="panel">
      <Button name="move" func={commands.move} />
      <div>
        <Button name="left" func={commands.left} />
        <Button name="right" func={commands.right} />
      </div>
      <Button name="report" func={commands.report} />
      <Button name="place" func={commands.place} />
    </div>
  );
};

export default Panel;

Panel.propTypes = {
  commands: PropTypes.objectOf(PropTypes.func),
};

Panel.defaultProps = {
  commands: {
    move: () => { },
    left: () => { },
    right: () => { },
    report: () => { },
    place: () => { },
  },
};
