import logo from "./logo.svg";
import "./App.css";
import CreateJob from "./components/jobComponent";
import { Fragment } from "react";
import { Row, Col } from "antd";

function App() {
  return (
    <Fragment>
      <div className="row container">
        <Row>
          <Col span={24}>
            <CreateJob />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default App;
