import { compose, setDisplayName, withStateHandlers } from 'recompose';

const withEmailForm = withStateHandlers(
  ({ email = '' }) => ({
    email,
    emailValid: false,
    submitted: false
  }),
  {
    onEmailType: () => event => ({
      // eslint-disable-next-line
      emailValid: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        event.target.value
      ),
      email: event.target.value
    }),
    onFormSubmit: () => event => ({
      submitted: true
    })
  }
);

export default compose(setDisplayName('EmailFormContainer'), withEmailForm);
