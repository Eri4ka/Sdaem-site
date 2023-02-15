import ReactDOMServer from 'react-dom/server';

import { ContactFormValues } from '@mytypes/mailTypes';

const getEmailTemplate = (props: ContactFormValues) => {
  const template = <EmailTemplate {...props} />;
  return ReactDOMServer.renderToStaticMarkup(template);
};

const EmailTemplate: React.FC<ContactFormValues> = ({ name, email, message }) => {
  return (
    <div style={{ padding: '20px 0' }}>
      <div style={wrapperStyle}>
        <h1 style={{ color: '#664ef9' }}>Новая заявка</h1>
        <div>
          <h3>От кого:</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '40%' }}>
              <span style={labelStyle}>Электронная почта</span>
              <p>{email}</p>
            </div>
            <div style={{ width: '40%' }}>
              <span style={labelStyle}>Имя</span>
              <p>{name}</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Cообщение:</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

const wrapperStyle = {
  boxShadow: '0 0 20px rgb(0 0 0 / 15%)',
  borderRadius: '10px',
  padding: '25px',
  maxWidth: '600px',
  width: '100%',
  margin: '0 auto',
};

const labelStyle = {
  color: '#686868',
};

export default getEmailTemplate;
