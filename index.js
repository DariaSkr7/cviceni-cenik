const unSelectPlan = (planNumber) => {
  const planElement = document.querySelector(`#plan${planNumber}`);
  planElement.classList.remove('plan--selected');
};

const selectPlan = (planNumber) => {
  unSelectPlan(1);
  unSelectPlan(2);
  unSelectPlan(3);
  const planElement = document.querySelector(`#plan${planNumber}`);
  planElement.classList.add('plan--selected');
};

selectPlan(2);
// selectPlan(3);
