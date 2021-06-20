import React, { useEffect, useState } from "react";
import { RecipeReviewCard } from "../../components";
import { fetchApi } from "../../api/apiCall";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Slider, Purchase, CustomModal } from "../../components";
import "./Home.css";

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector((state) => state.Auth);
  useEffect(() => {}, []);

  console.log(auth);
  return (
    <React.Fragment>
      {isLoading == true ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <React.Fragment>
          <Container fluid>
            <Row>
              <Col>
                <Slider />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="justify-content-center">
                <Purchase />
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
