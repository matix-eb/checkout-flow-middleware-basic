import React from "react";
import { connect } from "react-redux";

const Step = ({ title, content, onNext, onBack }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
    {onBack ? <button onClick={onBack}>Back</button> : null}
    <button onClick={onNext}>Next</button>
  </div>
);

const _Step1 = props => <Step title="Step 1" {...props} />;
const _Step2 = props => <Step title="Step 2" {...props} />;
const _Step3 = props => <Step title="Step 3" {...props} />;

export const Step1 = connect(
  null,
  dispatch => ({
    onNext() {
      dispatch({
        type: "navigation:next",
        currentStep: "step1"
      });
    }
  })
)(_Step1);

export const Step2 = connect(
  state => ({
    content: state.catFact
  }),
  dispatch => ({
    onBack() {
      dispatch({
        type: "navigation:back",
        currentStep: "step2"
      });
    },
    onNext() {
      dispatch({
        type: "navigation:next",
        currentStep: "step2"
      });
    }
  })
)(_Step2);

export const Step3 = connect(
  null,
  dispatch => ({
    onBack() {
      dispatch({
        type: "navigation:back",
        currentStep: "step3"
      });
    },
    onNext() {
      dispatch({
        type: "navigation:next",
        currentStep: "step3"
      });
    }
  })
)(_Step3);
