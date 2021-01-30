import React, { Fragment } from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import commonStyles from "./commonStyles";
import { useDispatch } from "react-redux";
import { handleCurrentPage,handleQuestionSelection } from "../redux/action";

const useStyles = makeStyles({
  buttonArea: {
    marginTop: "80%",
    display: "block",
  },
});

const Page0_0 = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span className={commonClasses.boldText}>누구</span>
            <sapn>를 위한</sapn>
            <br></br>
            <span> 선물인가요?</span>
          </Typography>
          <div
            className={classes.buttonArea}
            onClick={() => {
              dispatch(handleCurrentPage("page0-1"));
            }}
          >
            <Button
              className={commonClasses.styledbutton}
              onClick={() => {
                dispatch(handleQuestionSelection("answer0-1",1));
              }}
            >
              <Typography className={commonClasses.buttonText}>
                나를 위한 선물
              </Typography>
            </Button>

            <Button className={commonClasses.styledbutton}>
              <Typography className={commonClasses.buttonText}>
                타인을 위한 선물
              </Typography>
            </Button>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page0_0;
