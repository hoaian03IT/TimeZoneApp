import { useCallback, useState } from "react";
import { FormControl, FormGroup, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import { SecondaryBanner } from "~/components/Banner/SecondaryBanner";
import { ButtonSubmit, MyText } from "~/styles/contact";

import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
    },
    icon: {
        marginRight: "16px",
        fontSize: "2.4rem!important",
        color: "#777",
    },
}));

function Contact() {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState({
        email: "",
        message: "",
        name: "",
        subject: "",
    });

    const handleInputMessage = useCallback(
        (e) => setInputValue({ ...inputValue, message: e.target.value }),
        [inputValue]
    );

    const handleInputName = useCallback((e) => setInputValue({ ...inputValue, name: e.target.value }), [inputValue]);

    const handleInputEmail = useCallback((e) => setInputValue({ ...inputValue, email: e.target.value }), [inputValue]);

    const handleInputSubject = useCallback(
        (e) => setInputValue({ ...inputValue, subject: e.target.value }),
        [inputValue]
    );

    return (
        <>
            <SecondaryBanner title="Contact us" />
            <Container sx={{ pt: "130px", pb: "100px" }}>
                <Box
                    mb={6}
                    width="100%"
                    height="480px"
                    component="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2295.44225154297!2d105.80342053530312!3d21.04963963451595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab186f19c34b%3A0xb52faa7d1f2e771f!2sFPT%20Shop!5e0!3m2!1svi!2s!4v1673445107348!5m2!1svi!2s"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <Box>
                    <Typography variant="h5" fontWeight={700} fontStyle="italic" paddingBottom="30px">
                        Get in Touch
                    </Typography>
                    <Grid container justifyContent="space-between">
                        <Grid xl={8} sm={12}>
                            <FormGroup>
                                <FormControl sx={{ pb: "30px" }}>
                                    <TextField
                                        fullWidth
                                        value={inputValue.message}
                                        onChange={handleInputMessage}
                                        label="Enter message"
                                        variant="outlined"
                                        color="default"
                                        multiline
                                        rows={6}
                                    />
                                </FormControl>
                                <FormControl sx={{ pb: "30px" }}>
                                    <Grid container columnSpacing={4} rowSpacing={4}>
                                        <Grid xl={6} md={12} sm={12} xs={12}>
                                            <TextField
                                                fullWidth
                                                value={inputValue.name}
                                                onChange={handleInputName}
                                                label="Enter name"
                                                variant="outlined"
                                                color="default"
                                                multiline
                                            />
                                        </Grid>
                                        <Grid xl={6} md={12} sm={12} xs={12}>
                                            <TextField
                                                fullWidth
                                                value={inputValue.email}
                                                onChange={handleInputEmail}
                                                label="Enter email"
                                                variant="outlined"
                                                color="default"
                                                multiline
                                            />
                                        </Grid>
                                    </Grid>
                                </FormControl>
                                <FormControl sx={{ pb: "30px" }}>
                                    <TextField
                                        fullWidth
                                        value={inputValue.subject}
                                        onChange={handleInputSubject}
                                        label="Enter subject"
                                        variant="outlined"
                                        color="default"
                                    />
                                </FormControl>
                                <ButtonSubmit>SEND</ButtonSubmit>
                            </FormGroup>
                        </Grid>
                        <Grid xl={3} sm={12}>
                            <Grid container direction="column" rowSpacing={4}>
                                <Grid className={classes.root}>
                                    <HomeWorkOutlinedIcon className={classes.icon} />
                                    <Box>
                                        <MyText title="true">Buttonwood, California.</MyText>
                                        <MyText>Rosemead, CA 91770</MyText>
                                    </Box>
                                </Grid>
                                <Grid className={classes.root}>
                                    <PhoneAndroidIcon className={classes.icon} />
                                    <Box>
                                        <MyText title="true">+1 253 565 2365</MyText>
                                        <MyText>Mon to Fri 9am to 6pm</MyText>
                                    </Box>
                                </Grid>
                                <Grid className={classes.root}>
                                    <MailOutlineIcon className={classes.icon} />
                                    <Box>
                                        <MyText title="true">support@colorlib.com</MyText>
                                        <MyText>Send us your query anytime!</MyText>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default Contact;
