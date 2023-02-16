import { useNavigate } from "react-router-dom";
import { SecondaryBanner } from "~/components/Banner/SecondaryBanner";
import { Form } from "~/components/Form";
import { FormLogin } from "~/components/FormLogin";
import { routes } from "~/config";
function Login() {
    const navigate = useNavigate();
    const handleGotoSignUp = () => navigate(routes.signUp);

    return (
        <>
            <SecondaryBanner title="Login" />
            <Form
                titleBackground="New to our Shop?"
                paraBackground="There are advances being made in science and technology everyday, and a good example of this is the"
                textBtn="CREATE AN ACCOUNT"
                onClickBtn={handleGotoSignUp}>
                <FormLogin />
            </Form>
        </>
    );
}

export default Login;
