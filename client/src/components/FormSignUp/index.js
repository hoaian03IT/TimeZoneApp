import { useState, useCallback, useEffect } from "react";
import { FormControl, FormGroup, Input, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { MyButton, MyTitle } from "~/styles/loginSignUp";
import { validateInput } from "~/utils/validateInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { routes } from "~/config";
import { updateToast } from "~/utils/updateToast";

function FormSignUp() {
    const navigate = useNavigate();

    const [valueInput, setValueInput] = useState({
        fullName: "",
        phoneNumber: "",
        username: "",
        password: "",
    });

    const [submittable, setSubmittable] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!valueInput.fullName || !valueInput.phoneNumber || !valueInput.username || !valueInput.password) {
            setSubmittable(false);
        } else {
            setSubmittable(true);
        }
    }, [valueInput.fullName, valueInput.password, valueInput.phoneNumber, valueInput.username]);

    const handleSetNameInput = useCallback(
        (e) => setValueInput({ ...valueInput, fullName: e.target.value }),
        [valueInput]
    );
    const handleSetPhoneNumberInput = useCallback(
        (e) => setValueInput({ ...valueInput, phoneNumber: e.target.value }),
        [valueInput]
    );
    const handleSetUsernameInput = useCallback(
        (e) => setValueInput({ ...valueInput, username: e.target.value }),
        [valueInput]
    );
    const handleSetPasswordInput = useCallback(
        (e) => setValueInput({ ...valueInput, password: e.target.value }),
        [valueInput]
    );

    const handleSubmit = async () => {
        setLoading(true);
        if (!validateInput().name(valueInput.fullName)) {
            updateToast("error", "Please fill your correct name");
            setValueInput({ ...valueInput, fullName: "" });
        } else if (!validateInput().phoneNumber(valueInput.phoneNumber)) {
            updateToast("error", "Your phone number has only numbers");
        } else if (!validateInput().minLength(valueInput.password)) {
            updateToast("error", "Your password must have at least 8 characters");
            setValueInput({ ...valueInput, password: "" });
        } else if (!validateInput().username(valueInput.username)) {
            updateToast("error", "Username must have numbers and characters");
            setValueInput({ ...valueInput, username: "" });
        } else {
            try {
                const isSuccess = await axios.post("/user/sign-up", valueInput);
                if (isSuccess) {
                    updateToast("success", "Register account successfully!", {
                        duration: 500,
                    });

                    setTimeout(() => navigate(routes.login), 500);
                }
            } catch (error) {
                if (error) {
                    updateToast("error", error.response.data.msg);
                }
            }
        }
        setLoading(false);
    };

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        border: "1px solid #713200",
                        padding: "16px",
                        userSelect: "none",
                    },
                }}
            />
            <Box sx={{ padding: "0 20px" }}>
                <MyTitle variant="h5">
                    Let's experience <br />
                    NEW THINGS!
                </MyTitle>
                <FormGroup>
                    <FormControl sx={{ padding: "30px 0" }}>
                        <Input
                            type="text"
                            placeholder="Your name"
                            color="info"
                            value={valueInput.fullName}
                            onChange={handleSetNameInput}
                        />
                    </FormControl>
                    <FormControl sx={{ pb: "30px" }}>
                        <Input
                            type="text"
                            placeholder="Phone number"
                            color="info"
                            value={valueInput.phoneNumber}
                            onChange={handleSetPhoneNumberInput}
                        />
                    </FormControl>
                    <FormControl sx={{ pb: "30px" }}>
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
                        &ensp; CREATE ACCOUNT
                    </MyButton>
                </FormGroup>
            </Box>
        </>
    );
}

export { FormSignUp };
