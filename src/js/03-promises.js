import Notiflix from 'notiflix';
Notiflix.Notify.init({
  timeout: 10000,
});

const refs = {
  form: document.querySelector('.form'),
  // delay: document.querySelector('input[name=delay]'),
  // step: document.querySelector('input[name=step]'),
  // amount: document.querySelector('input[name=amount]'),
};

refs.form.addEventListener('submit', onFormSabmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSabmit(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = refs.form;

  let currentDelay = +delay.value;

  for (let i = 1; i <= +amount.value; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    currentDelay += +step.value;
  }
}
