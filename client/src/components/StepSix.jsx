import React, { useContext } from "react";
import { Container, Form, Row, Col, Stack } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";

export default function StepSix() {
  const [state, dispatch] = useContext(LocalContext);
  const { tribalDevelopementDepartment } = state;

  const {
    childrenLiveInHostels,
    studentsGettingScholarShips,
    economicalHelpForBSTC,
    studentsHavingBenifitOfFreeScooty,
    childrenAdmittedInDayCare,
    economicalHelpInAccidentDiseaseDeath,
    coachingBenifitsToGettingAdmissionInIITPMTs,
    noOfStudentsGettingAdmissionInCompetitiveExams,
  } = tribalDevelopementDepartment;

  const handleFieldChange = (e) => {
    const { name, value, type } = e.target;
    const values = { ...tribalDevelopementDepartment };

    if (type === "radio") {
      values[name] = value === "yes" ? true : false;
    } else {
      values[name] = value;
    }
    dispatch({
      type: "handleStepSix",
      payload: values,
    });
  };
  return (
    <Container>
      <h1>जनजाति क्षेत्रीय विकास विभाग-</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. छात्रावास में रहने वाले बच्चों का विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="छात्रावास में रहने वाले बच्चों का विवरण"
                name="childrenLiveInHostels"
                value={childrenLiveInHostels}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. छात्रवृति प्राप्त करने वाले छात्रों का विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="छात्रवृति प्राप्त करने वाले छात्रों का विवरण"
                name="studentsGettingScholarShips"
                value={studentsGettingScholarShips}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. बी.एस. टी.सी. प्रशिक्षण हेतु आर्थिक सहायता का विवरण </h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="बी.एस. टी.सी. प्रशिक्षण हेतु आर्थिक सहायता का विवरण"
                name="economicalHelpForBSTC"
                value={economicalHelpForBSTC}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                4. निःशुल्क स्कूटी से लाभान्वित होने वाले छात्राओं का विवरण
              </h4>
            </Col>
            <Col>
              <Form.Control
                placeholder=" निःशुल्क स्कूटी से लाभान्वित होने वाले छात्राओं का विवरण"
                name="studentsHavingBenifitOfFreeScooty"
                value={studentsHavingBenifitOfFreeScooty}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. मा-बाडी/ डे-केयर सेन्टर पर भर्ती बच्चों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="मा-बाडी/ डे-केयर सेन्टर पर भर्ती बच्चों की संख्या"
                name="childrenAdmittedInDayCare"
                value={childrenAdmittedInDayCare}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. दुर्घटना/ बीमारी/ मृत्यु पर प्राप्त आर्थिक सहायता</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder=" दुर्घटना/ बीमारी/ मृत्यु पर प्राप्त आर्थिक सहायता"
                name="economicalHelpInAccidentDiseaseDeath"
                value={economicalHelpInAccidentDiseaseDeath}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                7. पी.एम.टी/पी.ई.टी/ आई.आई.टी. में प्रवेश हेतु कॉचिंग की सुविधा
              </h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="पी.एम.टी/पी.ई.टी/ आई.आई.टी. में प्रवेश हेतु कॉचिंग की सुविधा"
                name="coachingBenifitsToGettingAdmissionInIITPMTs"
                value={coachingBenifitsToGettingAdmissionInIITPMTs}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                8. विभिन्न प्रतियोगी परीक्षाओं में भर्ती होने वाले छात्राओ की
                संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="विभिन्न प्रतियोगी परीक्षाओं में भर्ती होने वाले छात्राओ की संख्या"
                name="noOfStudentsGettingAdmissionInCompetitiveExams"
                value={noOfStudentsGettingAdmissionInCompetitiveExams}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
