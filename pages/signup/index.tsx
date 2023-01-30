import SignUpForm from '@modules/SignUpForm';
import AuthLayout from '@pages/Layout/AuthLayout';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
