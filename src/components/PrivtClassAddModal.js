import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function PrivtClassAddModal(props) {
  const { show, setShow } = props
  const { addprivtclass,coachs } = useContext(SportsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={addprivtclass}>
        <Modal.Header closeButton>
          <Modal.Title>Add privtclass</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
             TIME
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="time" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              COACH
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {coachs.map(coach => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="coachId" value={coach._id} />
                  </Col>
                  <Col md="8">
                
                <span style={{ marginLeft: 10 }}>{coach.firstName}{coach.lastName}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add PrivtClass
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default PrivtClassAddModal
