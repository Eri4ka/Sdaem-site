import SignInForm from '@modules/SignInForm';
import AuthLayout from '@pages/Layout/AuthLayout';

const SignInPage = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignInPage;
