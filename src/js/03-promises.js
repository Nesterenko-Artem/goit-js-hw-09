import Notiflix from 'notiflix';


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
   Notiflix.Notify.success('Sol lucet omnibus');
  } else {
    
Notiflix.Notify.failure('Qui timide rogat docet negare');
  }
}
// Notiflix.Notify.failure('Qui timide rogat docet negare');
//  Notiflix.Notify.success('Sol lucet omnibus');

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay]'),
  step: document.querySelector('input[name="step]'),
  amount: document.querySelector('input[name="amount]'),
};

