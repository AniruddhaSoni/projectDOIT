import { Form, Container } from "react-bootstrap"

export default function Comp1() {
    return (
        <Container fluid>
            <Form>
                <Form.Group className="mb-3" controlId="districtName">
                    <Form.Label>1. जिले का नाम</Form.Label>
                    <Form.Control type="text" placeholder="जिले का नाम"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="blockName">
                    <Form.Label>2. ब्लॉक का नाम</Form.Label>
                    <Form.Control type="text" placeholder="ब्लॉक का नाम" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="gramPanchayat">
                    <Form.Label>3. ग्राम पंचायत</Form.Label>
                    <Form.Control type="text" placeholder="ग्राम पंचायत" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="villageName">
                    <Form.Label>4. ग्राम का नाम</Form.Label>
                    <Form.Control type="text" placeholder="ग्राम का नाम" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="familyNumber">
                    <Form.Label>5. परिवार संख्या</Form.Label>
                    <Form.Control type="text" placeholder="परिवार संख्या" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="familyMukhia">
                    <Form.Label>6. परिवार के मुखिया का नाम </Form.Label>
                    <Form.Control type="text" placeholder="परिवार के मुखिया का नाम " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="caste">
                    <Form.Label>7. जाति</Form.Label>
                    <Form.Control type="text" placeholder="जाति" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="noOfMembers">
                    <Form.Label>8. परिवार के कुल सदस्यों की संख्या</Form.Label>
                    <Form.Control type="text" placeholder="परिवार के कुल सदस्यों की संख्या"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="chd0to6">
                    <Form.Label>9. परिवार में 0 से 6 साल के बच्चों का विवरण</Form.Label>
                    <Form.Control type="text" placeholder="परिवार में 0 से 6 साल के बच्चों का विवरण"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="chd6to18">
                    <Form.Label>10. 6 से 18 साल के बच्चों का विवरण</Form.Label>
                    <Form.Control type="text" placeholder="6 से 18 साल के बच्चों का विवरण"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="above18">
                    <Form.Label>11. 18 से अधिक उम्र के सदस्यों का विवरण </Form.Label>
                    <Form.Control type="text" placeholder="18 से अधिक उम्र के सदस्यों का विवरण "></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="noOfMarried">
                    <Form.Label>12. परिवार में विवाहित सदस्यों का विवरण</Form.Label>
                    <Form.Control type="text" placeholder="परिवार में विवाहित सदस्यों का विवरण"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="noOfUnmarried">
                    <Form.Label>13. परिवार में अविवाहित सदस्यों का विवरण</Form.Label>
                    <Form.Control type="text" placeholder="परिवार में अविवाहित सदस्यों का विवरण"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="primaryEdu">
                    <Form.Label>14. परिवार में प्राथमिक शिक्षा (कक्षा 1 से 8) प्राप्त सदस्यों का विवरण</Form.Label>
                    <Form.Control type="text" placeholder="परिवार में प्राथमिक शिक्षा (कक्षा 1 से 8) प्राप्त सदस्यों का विवरण"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="secondaryEdu">
                    <Form.Label>15. परिवार में माध्यमिक शिक्षा (कक्षा 9 से 10)  प्राप्त सदस्यों का विवरण </Form.Label>
                    <Form.Control type="text" placeholder="परिवार में माध्यमिक शिक्षा (कक्षा 9 से 10)  प्राप्त सदस्यों का विवरण"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="highEdu">
                    <Form.Label>16. परिवार में उच्च शिक्षा/तकनीकी शिक्षा प्राप्त सदस्यों का विवरण</Form.Label>
                    <Form.Control type="text" placeholder="परिवार में उच्च शिक्षा/तकनीकी शिक्षा प्राप्त सदस्यों का विवरण"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="bpl">
                    <Form.Label>17. परिवार बीपीएल में चयनित है या नहीं</Form.Label>
                    <Form.Control type="text" placeholder="परिवार बीपीएल में चयनित है या नहीं"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="foodSecurity">
                    <Form.Label>18. परिवार खाद्य सुरक्षा योजना में लाभान्वित है या नहीं</Form.Label>
                    <Form.Control type="text" placeholder="परिवार खाद्य सुरक्षा योजना में लाभान्वित है या नहीं"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="migration">
                    <Form.Label>19. परिवार में पलायन की स्थिति - हॉ/ना</Form.Label>
                    <Form.Control type="text" placeholder="परिवार में पलायन की स्थिति - हॉ/ना"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="migrationDetail">
                    <Form.Label>20. पलायन करने सदस्यों का विवरण</Form.Label>
                    <Form.Control type="text" placeholder="पलायन करने सदस्यों का विवरण"></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}