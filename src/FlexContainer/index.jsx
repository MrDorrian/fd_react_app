import React from 'react';
import styles from '../FlexContainer/FlexContainer.module.scss';
import PropTypes from 'prop-types';
const FlexContainer = props => {
  const { children, jc, ai } = props;
  const styleProps = {
    justifyContent: jc,
    alignItems: ai,
  };
  return (
    <section style={styleProps} className={styles.wrapper}>
      <div>{children}</div>
    </section>
  );
};
FlexContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FlexContainer;
