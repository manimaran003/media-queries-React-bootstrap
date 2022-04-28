import { render, screen, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../ReduxFIles/Reducers/store';
import LoginPage from '../../CssModuleslocalStorage/LoginComponent/LoginPage';
import userEvent from '@testing-library/user-event';

describe('login form input box test cases', () => {
  test('render email the input', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const inputEl = document.getElementById('exampleFormControlInput1');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'email');

    fireEvent.click(screen.getByRole('button'));
    expect().toHaveBeenCalled();
  });

  test('pass a vaid email type and check not want show error msg', () => {
    //Arrange
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    //Assert
    const element = document.getElementById('exampleFormControlInput1');
    userEvent.type(element, 'test@gmail.com');
    expect(element).toHaveValue('test@gmail.com');
    expect(screen.queryByTestId('err1')).not.toBeInTheDocument();
  });

  test('render the password', () => {
    //Assert
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    //Arrange
    const inputEl = document.getElementById('exampleFormControlInput2');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'password');
  });
  test('pass a vaid password type and check not want show error msg', () => {
    //Arrange
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    //Assert
    const element = document.getElementById('exampleFormControlInput1');
    userEvent.type(element, 'pass@123');
    expect(element).toHaveValue('pass@123');
    expect(screen.queryByTestId('err2')).not.toBeInTheDocument();
  });
});
