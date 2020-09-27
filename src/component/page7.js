import React, { Fragment } from "react";
import { Button, Typography,Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

const page6 = () => {
  return (
    <Fragment>
      <div style={{ marginTop: "30%", marginLeft: 40, marginRight: 40 }}>
        <Fade in={true} timeout={3000}>
          <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            <span>하루 중</span>
            <br></br>
            <span style={{ marginTop: 0, fontWeight: "bold" }}>
              당신이 가장 선호하는
            </span>
            <br></br>
            <span>시간대는 언제인가요?</span>
          </Typography>
        </Fade>
        <div style={{ marginTop: "20%" }}>
          <Button
            style={{
              backgroundColor: "rgba(189,195,199,0.7)",
              width: "100%",
              height: "50px",
              borderRadius: 15,
            }}
          >
            <Link
              to="/page7-dawn"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                className="Text"
                style={{
                  opacity: 1,
                  color: "white",
                  fontSize: 20,
                }}
              >
                새벽 아침 산책길
              </Typography>
            </Link>
          </Button>

          <Link
            to="/page7-day"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                width: "100%",
                height: "50px",

                backgroundColor: "rgba(189,195,199,0.7)",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",

                  fontSize: 20,
                }}
              >
                햇빛이 따사로운 정오
              </Typography>
            </Button>
          </Link>
          <Link
            to="/page7-sunset"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                width: "100%",
                height: "50px",

                backgroundColor: "rgba(189,195,199,0.7)",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",

                  fontSize: 20,
                }}
              >
                노을이 지는 저녁무렵
              </Typography>
            </Button>
          </Link>
          <Link
            to="page7-night"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                width: "100%",
                height: "50px",

                backgroundColor: "rgba(189,195,199,0.7)",
                borderRadius: 15,
                marginTop: 20,
              }}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",

                  fontSize: 20,
                }}
              >
                센치해지는 늦은 밤
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default page6;
