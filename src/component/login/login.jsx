import React from "react";
import {
    Grid,
    InputAdornment,
    IconButton,
    Avatar,
    Typography,
    Paper,
    TextField,
    Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import VisibilityOffSharpIcon from "@material-ui/icons/VisibilityOffSharp";
import VisibilitySharpIcon from "@material-ui/icons/VisibilitySharp";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory } from "react-router-dom";

import { login } from "../../redux/auth/authAction";
import { connect } from "react-redux";

const useStyle = makeStyles((theme) => ({
    backgroundColor: {
        backgroundImage: "url(https://picsum.photos/1920/1080)",
        height: "100vh",
        alignItems: "center",
    },
    paperStyle: {
        marginRight: "5em",
        paddingTop: "6em",
        paddingBottom: "6em",
        borderRadius: "16px",
    },
    buttonStyle: {
        textAlign: "center",
    },
    avtarHolder: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    lockAvatarStyle: {
        backgroundColor: "#861510",
    },
    typographyStyle: {
        paddingTop: "1em",
        fontSize: "1.5rem",
        fontWeight: 500,
    },
}));

function LoginPage(props) {
    const history = useHistory();
    const [state, setState] = useState(false);
    function changedValue() {
        setState(!state);
    }

    const [auth, setAuth] = useState({
        username: "",
        password: "",
    });
    const handleChange = (event) => {
        setAuth({
            ...auth,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (props.auth.loggedIn) {
            history.push("/");
        }
    }, [props.auth.loggedIn]);

    const classes = useStyle();
    return (
        <Grid
            container
            justify="flex-end"
            classes={{ root: classes.backgroundColor }}
        >
            <Grid item xs={5} sm={5} md={5} lg={5} xl={4}>
                <Paper elevation={3} classes={{ root: classes.paperStyle }}>
                    <Grid container justify="center">
                        <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                            <Grid container spacing={4}>
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    xl={12}
                                    className={classes.avtarHolder}
                                >
                                    <Avatar className={classes.lockAvatarStyle}>
                                        <LockIcon />
                                    </Avatar>
                                    <Typography
                                        className={classes.typographyStyle}
                                    >
                                        Sign In
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    xl={12}
                                >
                                    <TextField
                                        id="filled-basic"
                                        name="username"
                                        label="Username"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={(event) =>
                                            handleChange(event)
                                        }
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    xl={12}
                                >
                                    <TextField
                                        id="filled-basic"
                                        name="password"
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        type={state ? "text" : "password"}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment>
                                                    <IconButton
                                                        onClick={changedValue}
                                                    >
                                                        {!state ? (
                                                            <VisibilitySharpIcon />
                                                        ) : (
                                                            <VisibilityOffSharpIcon />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={(event) =>
                                            handleChange(event)
                                        }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    xl={12}
                                    classes={{ root: classes.buttonStyle }}
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        onClick={() => props.Login(auth)}
                                    >
                                        Log In
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    auth: { ...state.auth },
});

const mapDispatchToProps = (dispatch) => ({
    Login: (userCredential) => dispatch(login(userCredential)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
