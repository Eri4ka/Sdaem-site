import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from '../Modal';
import { MODAL_INFO, toggleFunc } from './constants';

const { modalHead, bodyText, modalBtn } = MODAL_INFO;

describe('SubmitModal', () => {
  it('Props "head", "bodyText", "btnText" передаются и отображаются', () => {
    const handleToggle = jest.fn().mockImplementation(toggleFunc);
    render(
      <Modal
        visible={true}
        handleToggle={handleToggle}
        head={modalHead}
        bodyText={bodyText}
        btnText={modalBtn}
      />,
    );

    const headValue = screen.getByText(modalHead);
    const bodyTextValue = screen.getByText(bodyText);
    const btnTextValue = screen.getByText(modalBtn);

    expect(headValue).toBeInTheDocument();
    expect(bodyTextValue).toBeInTheDocument();
    expect(btnTextValue).toBeInTheDocument();
  });
  it('При клике на кнопку "Закрыть" вызывается ф-ция handleToggle', async () => {
    const handleToggle = jest.fn().mockImplementation(toggleFunc);
    render(
      <Modal
        visible={true}
        handleToggle={handleToggle}
        head={modalHead}
        bodyText={bodyText}
        btnText={modalBtn}
      />,
    );

    const buttonElement = screen.getByRole('button', { name: modalBtn });

    await userEvent.click(buttonElement);

    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
  it('При visible=false, компонент Modal не отображется', () => {
    const handleToggle = jest.fn().mockImplementation(toggleFunc);
    render(
      <Modal
        visible={false}
        handleToggle={handleToggle}
        head={modalHead}
        bodyText={bodyText}
        btnText={modalBtn}
      />,
    );

    const modalComponent = document.querySelector('.modal');
    expect(modalComponent).not.toBeInTheDocument();
  });
});
