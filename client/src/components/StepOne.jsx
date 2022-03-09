import { Form, Container, Stack, Button } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";
import { useContext } from "react";

export default function StepOne() {
  const [state, dispatch] = useContext(LocalContext);
  const { familyDetail } = state;

  const handleFieldChange = (e, index) => {
    const { name, value, type } = e.target;
    const values = { ...familyDetail };

    if (name === "migrationDetails") {
      values[name][index] = value;
    } else if (type === "radio") {
      values[name] = value === "yes" ? true : false;
    } else {
      values[name] = value;
    }
    dispatch({
      type: "handleStepOne",
      payload: values,
    });
  };

  const handleAdd = () => {
    const values = { ...familyDetail };
    values["migrationDetails"].push("");
    dispatch({
      type: "handleStepOne",
      payload: values,
    });
  };

  const handleRemove = () => {
    const values = { ...familyDetail };
    if (values["migrationDetails"].length > 1) {
      values["migrationDetails"].pop();
      dispatch({
        type: "handleStepOne",
        payload: values,
      });
    } else {
      alert("Cannot remove it!");
    }
  };

  return (
    <Container fluid>
      <h1>परिवार का सर्वे</h1>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="districtName">
          <Form.Label>1. जिले का नाम</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.districtName}
            onChange={handleFieldChange}
            placeholder="जिले का नाम"
            name="districtName"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="blockName">
          <Form.Label>2. ब्लॉक का नाम</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.blockName}
            onChange={handleFieldChange}
            placeholder="ब्लॉक का नाम"
            name="blockName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="gramPanchayat">
          <Form.Label>3. ग्राम पंचायत</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.gramPanchayat}
            onChange={handleFieldChange}
            placeholder="ग्राम पंचायत"
            name="gramPanchayat"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="villageName">
          <Form.Label>4. ग्राम का नाम</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.villageName}
            onChange={handleFieldChange}
            placeholder="ग्राम का नाम"
            name="villageName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="familyNumber">
          <Form.Label>5. परिवार संख्या</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.familyNumber}
            onChange={handleFieldChange}
            placeholder="परिवार संख्या"
            name="familyNumber"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="hof">
          <Form.Label>6. परिवार के मुखिया का नाम </Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.hof}
            onChange={handleFieldChange}
            placeholder="परिवार के मुखिया का नाम"
            name="hof"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="caste">
          <Form.Label>7. जाति</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.caste}
            onChange={handleFieldChange}
            placeholder="जाति"
            name="caste"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="totalMembers">
          <Form.Label>8. परिवार के कुल सदस्यों की संख्या</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.totalMembers}
            onChange={handleFieldChange}
            placeholder="परिवार के कुल सदस्यों की संख्या"
            name="totalMembers"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="childZeroToSix">
          <Form.Label>9. परिवार में 0 से 6 साल के बच्चों का विवरण</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.childZeroToSix}
            onChange={handleFieldChange}
            placeholder="परिवार में 0 से 6 साल के बच्चों का विवरण"
            name="childZeroToSix"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="childSixToEighteen">
          <Form.Label>10. 6 से 18 साल के बच्चों का विवरण</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.childSixToEighteen}
            onChange={handleFieldChange}
            placeholder="6 से 18 साल के बच्चों का विवरण"
            name="childSixToEighteen"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="aboveEighteen">
          <Form.Label>11. 18 से अधिक उम्र के सदस्यों का विवरण </Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.aboveEighteen}
            onChange={handleFieldChange}
            placeholder="18 से अधिक उम्र के सदस्यों का विवरण "
            name="aboveEighteen"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="totalMarried">
          <Form.Label>12. परिवार में विवाहित सदस्यों का विवरण</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.totalMarried}
            onChange={handleFieldChange}
            placeholder="परिवार में विवाहित सदस्यों का विवरण"
            name="totalMarried"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="totalUnmarried">
          <Form.Label>13. परिवार में अविवाहित सदस्यों का विवरण</Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.totalUnmarried}
            onChange={handleFieldChange}
            placeholder="परिवार में अविवाहित सदस्यों का विवरण"
            name="otalUnmarried"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="primaryEducation">
          <Form.Label>
            14. परिवार में प्राथमिक शिक्षा (कक्षा 1 से 8) प्राप्त सदस्यों का
            विवरण
          </Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.primaryEducation}
            onChange={handleFieldChange}
            placeholder="परिवार में प्राथमिक शिक्षा (कक्षा 1 से 8) प्राप्त सदस्यों का विवरण"
            name="primaryEducation"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="secondaryEducation">
          <Form.Label>
            15. परिवार में माध्यमिक शिक्षा (कक्षा 9 से 10) प्राप्त सदस्यों का
            विवरण
          </Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.secondaryEducation}
            onChange={handleFieldChange}
            placeholder="परिवार में माध्यमिक शिक्षा (कक्षा 9 से 10)  प्राप्त सदस्यों का विवरण"
            name="secondaryEducation"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="higherEducation">
          <Form.Label>
            16. परिवार में उच्च शिक्षा/तकनीकी शिक्षा प्राप्त सदस्यों का विवरण
          </Form.Label>
          <Form.Control
            type="text"
            value={familyDetail.higherEducation}
            onChange={handleFieldChange}
            placeholder="परिवार में उच्च शिक्षा/तकनीकी शिक्षा प्राप्त सदस्यों का विवरण"
            name="higherEducation"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="bpl">
          <Form.Label>17. परिवार बीपीएल में चयनित है या नहीं</Form.Label>
          <Stack direction="horizontal" gap={4} onChange={handleFieldChange}>
            <Form.Check
              type="radio"
              id="radioYes"
              label="YES"
              name="bpl"
              value="yes"
            />
            <Form.Check
              type="radio"
              id="radioNO"
              label="NO"
              name="bpl"
              value="no"
            />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3" controlId="foodSecurity">
          <Form.Label>
            18. परिवार खाद्य सुरक्षा योजना में लाभान्वित है या नहीं
          </Form.Label>
          <Stack direction="horizontal" gap={4} onChange={handleFieldChange}>
            <Form.Check
              type="radio"
              id="radioYes"
              label="YES"
              onChange={handleFieldChange}
              value="yes"
              name="foodSecurity"
            />
            <Form.Check
              type="radio"
              id="radioNO"
              label="NO"
              name="foodSecurity"
              value="no"
              onChange={handleFieldChange}
            />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3" controlId="migration">
          <Form.Label>19. परिवार में पलायन की स्थिति - हॉ/ना</Form.Label>
          <Stack direction="horizontal" gap={4} onChange={handleFieldChange}>
            <Form.Check
              type="radio"
              id="radioYes"
              label="YES"
              name="migration"
              value="yes"
            />
            <Form.Check
              type="radio"
              id="radioNO"
              label="NO"
              name="migration"
              values="no"
            />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3" controlId="migrationDetails">
          <Form.Label>20. पलायन करने सदस्यों का विवरण</Form.Label>
          {familyDetail.migrationDetails.map((ele, index) => (
            <Form.Control
              className="my-3"
              key={index}
              type="text"
              value={ele}
              onChange={(e) => handleFieldChange(e, index)}
              placeholder="पलायन करने सदस्यों का विवरण"
              name="migrationDetails"
            ></Form.Control>
          ))}
          <Stack direction="horizontal" gap={3}>
            <Button
              size="sm"
              variant="dark"
              className="my-4 w-25 py-2"
              onClick={handleAdd}
            >
              Add more
            </Button>
            <Button
              size="sm"
              variant="danger"
              className="my-4 w-25 py-2"
              onClick={handleRemove}
            >
              Remove
            </Button>
          </Stack>
        </Form.Group>
      </Form>
    </Container>
  );
}
