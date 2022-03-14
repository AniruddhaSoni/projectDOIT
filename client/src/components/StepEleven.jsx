import { Container, Form, Row, Stack, Col, Button } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";
import { useContext } from "react";

export default function StepEleven() {
  const [state, dispatch] = useContext(LocalContext);
  const { revenueDepartment } = state;
  const {
    totalLand,
    isIrrigatedLand,
    irrigationSystem,
    nominationLeft,
    isKhatedariLand,
    landDispute,
    cmReliefFundPending,
    specialDetails,
  } = revenueDepartment;

  const handleFieldChange = (e, index) => {
    const { name, value } = e.target;
    const values = { ...revenueDepartment };
    const dataAttri = e.target.getAttribute("data-property");

    if (name === "specialDetails") {
      values[name] = value;
    } else {
      values[dataAttri][index][name] = value;
    }
    dispatch({
      type: "handleStepEleven",
      payload: values,
    });
  };

  const handleAdd = (e) => {
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...revenueDepartment };

    if (dataAttri === "totalLand") values[dataAttri].push({ landDetails: "" });
    else if (dataAttri === "isIrrigatedLand")
      values[dataAttri].push({ landDetails: "", isIrrigated: "" });
    else if (dataAttri === "irrigationSystem")
      values[dataAttri].push({ equipment: "" });
    else if (dataAttri === "nominationLeft")
      values[dataAttri].push({ nominationDetail: "" });
    else if (dataAttri === "isKhatedariLand")
      values[dataAttri].push({ landDetails: "", isKhatedari: "" });
    else if (dataAttri === "landDispute")
      values[dataAttri].push({ disputeDetail: "" });
    else if (dataAttri === "cmReliefFundPending")
      values[dataAttri].push({ pendingDetails: "" });
    dispatch({
      type: "handleStepEleven",
      payload: values,
    });
  };

  const handleRemove = (e) => {
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...revenueDepartment };

    if (values[dataAttri].length > 0) {
      values[dataAttri].pop();
      dispatch({
        type: "handleStepEleven",
        payload: values,
      });
    } else alert("Nothing to remove");
  };
  return (
    <Container>
      <h1>11. राजस्व विभाग - </h1>
      <Form>
        <Stack gap={3}>
          <Row>
            <h4>1. परिवार द्वारा कुल धारित भूमि का विवरण</h4>
            {totalLand.length > 0 &&
              totalLand.map((ele, index) => (
                <Row className="my-2" key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      name="landDetails"
                      value={ele.landDetails}
                      data-property="totalLand"
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="परिवार द्वारा कुल धारित भूमि का विवरण"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="totalLand"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="totalLand"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>2. भूमि सिंचित है या असिंचित का विवरण</h4>
            {isIrrigatedLand.length > 0 &&
              isIrrigatedLand.map((ele, index) => (
                <Row className="my-2" key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      name="landDetails"
                      value={ele.landDetails}
                      data-property="isIrrigatedLand"
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="भूमि विवरण"
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      name="isIrrigated"
                      value={ele.isIrrigated}
                      data-property="isIrrigatedLand"
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="सिंचित है या असिंचित"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="isIrrigatedLand"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="isIrrigatedLand"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>3. सिंचाई के साधन का विवरण</h4>
            {irrigationSystem.length > 0 &&
              irrigationSystem.map((ele, index) => (
                <Row className="my-2" key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      name="equipment"
                      value={ele.equipment}
                      data-property="irrigationSystem"
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="विवरण"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="irrigationSystem"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="irrigationSystem"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row className="mt-4 mb-2">
            <h4>4. यदि कोई नामान्तकरण दर्ज होने से शेष है तो उसका विवरण</h4>
            {nominationLeft.length > 0 &&
              nominationLeft.map((ele, index) => (
                <Row className="my-2" key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      name="nominationDetail"
                      value={ele.nominationDetail}
                      data-property="nominationLeft"
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="विवरण"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="nominationLeft"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="nominationLeft"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>5. भूमि खातेदारी है या गैरखातेदारी है उसका विवरण</h4>

            {isKhatedariLand.length > 0 &&
              isKhatedariLand.map((ele, index) => (
                <Row className="my-2" key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      name="landDetails"
                      value={ele.landDetails}
                      data-property="isKhatedariLand"
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="भूमि विवरण"
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      name="isKhatedari"
                      value={ele.isKhatedari}
                      data-property="isKhatedariLand"
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="खातेदारी है या गैरखातेदारी"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}

            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="isKhatedariLand"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="isKhatedariLand"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>6.किसी न्यायालय में भूमि संबंधी विवाद का विवरण</h4>
            {landDispute.length > 0 &&
              landDispute.map((ele, index) => (
                <Row className="my-2" key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      name="disputeDetail"
                      value={ele.disputeDetail}
                      data-property="landDispute"
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="विवरण"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="landDispute"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="landDispute"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>
              7. मुख्यमंत्री सहायता कोष/ एसडीआरएफ सहायता का प्रकरण पेण्डिंग है
              तो उसका विवरण
            </h4>
            {cmReliefFundPending.length > 0 &&
              cmReliefFundPending.map((ele, index) => (
                <Row className="my-2" key={index}>
                  <Col>
                    <Form.Control
                      type="text"
                      name="pendingDetails"
                      value={ele.pendingDetails}
                      data-property="cmReliefFundPending"
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="विवरण"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="cmReliefFundPending"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="cmReliefFundPending"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <Col>
              <h4>8. विशेष विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="specialDetails"
                value={specialDetails}
                data-property="specialDetails"
                onChange={(e) => handleFieldChange(e)}
                placeholder="विवरण"
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
