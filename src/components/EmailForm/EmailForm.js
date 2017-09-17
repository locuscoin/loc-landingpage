import React from 'react';
import styled from 'styled-components';

const Form = styled.form`transition: all 0.30s ease-in-out;`;

const Button = styled.button`
  display: inline-block;
  position: relative;
  overflow: hidden;

  line-height: 2;
  font-size: 20px;
  letter-spacing: .01em;

  margin: 10px 5px;
  color: white;
  padding: 5px 10px;
  border: 2px solid white;
  background-color: transparent;
  border-radius: 5px;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.4)
  );

  &::after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 0;
  }
  &:hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const EmailInput = styled.input`
  line-height: 2;
  letter-spacing: .1em;
  font-size: 20px;
  color: white;
  box-sizing: border-box;

  padding: 5px 10px;
  border: 2px solid white;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  width: 100%;
  min-width: 25vw;

  &::placeholder {
    color: white;
  }

  &:focus {
    border-radius: 5px;
    border: 2px solid white;
    animation: emailfocus 100ms ease-in-out;
    -webkit-transition: background-color 500ms;
    -o-transition: background-color 500ms;
    transition: background-color 500ms;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @keyframes emailfocus {
    0% {
      box-shadow: 0 0 0px rgba(255, 255, 255, 1.0);
    }
    100% {
      box-shadow: 0 0 200px rgba(255, 255, 255, 0.5);
    }
  }

  @media only screen and (min-width: 400px) {
    width: auto;
  }
`;

const EmailForm = ({ className, email, onEmailType, onFormSubmit }) =>
  <div id="mc_embed_signup" className={className}>
    <Form
      action="//appreneur.us10.list-manage.com/subscribe/post?u=6558f155b7ebd8803d8d0466e&amp;id=52d0b2a4cc"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <EmailInput
        placeholder="E-mail"
        type="email"
        name="EMAIL"
        defaultValue={email}
        id="mce-EMAIL"
        onKeyUp={onEmailType}
        autocomplete="off"
      />
      <Button
        type="submit"
        name="subscribe"
        value="Subscribe"
        id="mc-embedded-subscribe"
        onSubmit={onFormSubmit}
      >
        Follow our journey
      </Button>
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_6558f155b7ebd8803d8d0466e_52d0b2a4cc"
          tabIndex="-1"
          value=""
        />
      </div>
    </Form>
  </div>;

const StyledEmailForm = styled(EmailForm)`
  margin: 5rem 1rem;
  text-align: center;
`;

export default StyledEmailForm;
