import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import './Panel.scss';

const Panel = ({ command }) => {
  return (
    <div className="panel">
      <Button move={command.move} />
      <div>
        <Button left={command.left} />
        <Button right={command.right} />
      </div>
      <Button report={command.report} />
    </div>
  );
};

export default Panel;

Panel.propTypes = {
  command: PropTypes.objectOf(PropTypes.func),
};

Panel.defaultProps = {
  command: {
    move: () => { },
    left: () => { },
    right: () => { },
    report: () => { },
  },
};
