import { getCatFact } from "./actions";

const getNextStep = async (state, currentStep, payload, dispatch) => {
  switch (currentStep) {
    case "step1":
      await dispatch(getCatFact());
      return "step2";
    case "step2":
      return "step3";
    case "step3":
      return "step1";
    default:
      return "step1";
  }
};

const getPrevStep = async (state, currentStep, payload, dispatch) => {
  switch (currentStep) {
    case "step2":
      return "step1";
    case "step3":
      return "step2";
    default:
      return "step1";
  }
};

const flowOrchestrator = history => store => next => async action => {
  if (action.type === "navigation:next") {
    const step = await getNextStep(
      store.getState(),
      action.currentStep,
      action.payload,
      store.dispatch
    );

    history.push(`/${step}`);
  } else if (action.type === "navigation:back") {
    const step = await getPrevStep(
      store.getState(),
      action.currentStep,
      action.payload,
      store.dispatch
    );

    history.push(`/${step}`);
  } else {
    return next(action);
  }
};

export default flowOrchestrator;
