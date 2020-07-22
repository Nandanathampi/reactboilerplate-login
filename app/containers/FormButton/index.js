/**
 *
 * FormButton
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFormButton from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ContainedButtons from  './components/Button';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export function FormButton() {
  useInjectReducer({ key: 'formButton', reducer });
  useInjectSaga({ key: 'formButton', saga });

  return (
    <div>
      <Helmet>
        <title>FormButton</title>
        <meta name="description" content="Description of FormButton" />
      </Helmet>
      <ContainedButtons/>
    </div>
  );
}

FormButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  formButton: makeSelectFormButton(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FormButton);
