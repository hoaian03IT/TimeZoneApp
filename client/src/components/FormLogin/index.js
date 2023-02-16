import { useState, useCallback, useEffect } from "react";
import { CircularProgress, FormControl, FormGroup, Input } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "~/config";
import { MyButton, MyLink, MyTitle } from "~/styles/loginSignUp";
import { useDispatch, useSelector } from "react-redux";
import { loginAccount } from "~/redux/actions";
import { Toaster } from "react-hot-toast";

function FormLogin() {
    const navigate = useNavigate();
    const loading = useSelector((state) => state.account.isLoading);

    const [valueInput, setValueInput] = useState({
        username: "",
        password: "",
    });

    const [submittable, setSubmittable] = useState(false);

    const dispatch = useDispatch();

    const handleSetUsernameInput = useCallback(
        (e) => {
            setValueInput({ ...valueInput, username: e.target.value.trim() });
        },
        [valueInput]
    );

    const handleSetPasswordInput = useCallback(
        (e) => {
            setValueInput({ ...valueInput, password: e.target.value });
        },
        [valueInput]
    );

    const handleSubmit = () => {
        dispatch(loginAccount.loginAccountRequest({ valueInput, navigate }));
    };

    useEffect(() => {
        if (!valueInput.username || !valueInput.password) {
            setSubmittable(false);
        } else {
            setSubmittable(true);
        }
    }, [valueInput]);

    return (
        <>
            <Toaster
                toastOptions={{
                    position: "top-right",
                    style: {
                        border: "1px solid #713200",
                        padding: "16px",
                        userSelect: "none",
                    },
                }}
            />
            <Box sx={{ padding: "0 20px" }}>
                <MyTitle variant="h5">
                    Welcome Back !<br />
                    Please Sign in now
                </MyTitle>
                <FormGroup>
                    <FormControl sx={{ padding: "30px 0" }}>
                        <Input
                            type="text"
                            placeholder="Username"
                            color="info"
                            value={valueInput.username}
                            onChange={handleSetUsernameInput}
                        />
                    </FormControl>
                    <FormControl sx={{ pb: "30px" }}>
                        <Input
                            type="password"
                            placeholder="Password"
                            color="info"
                            value={valueInput.password}
                            onChange={handleSetPasswordInput}
                        />
                    </FormControl>
                    <MyButton fullWidth variant="outlined" color="info" onClick={handleSubmit} disabled={!submittable}>
                        {loading && <CircularProgress color="info" size={24} />}
                        &ensp;LOG IN
                    </MyButton>
                    <MyLink component={Link} to={routes.home}>
                        Forget Password?
                    </MyLink>
                </FormGroup>
            </Box>
        </>
    );
}

export { FormLogin };
