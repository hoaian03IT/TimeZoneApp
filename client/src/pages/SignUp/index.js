import { useNavigate } from "react-router-dom";
import { SecondaryBanner } from "~/components/Banner/SecondaryBanner";
import { Form } from "~/components/Form";
import { FormSignUp } from "~/components/FormSignUp";
import { routes } from "~/config";

function SignUp() {
    const navigate = useNavigate();
    const handleGotoLogin = () => navigate(routes.login);

    return (
        <>
            <SecondaryBanner title="Sign up" />
            <Form titleBackground="You want to back to LOG IN" textBtn="GO TO LOGIN" onClickBtn={handleGotoLogin}>
                <FormSignUp />
            </Form>
        </>
    );
}

export default SignUp;
