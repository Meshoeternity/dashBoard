import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function ClassAddModal(props) {
  const { show, setShow } = props
  const { addClass,classes,sports, } = useContext(SportsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={addClass}>
        <Modal.Header closeButton>
          <Modal.Title>Add class</Modal.Title>
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
              Sport
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {sports.map(sport => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="sportId" value={sport._id} />
                  </Col>
                  <Col md="8">
                  <Image src={sport.poster} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <span style={{ marginLeft: 10 }}>{sport.title}</span>
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
            Add class
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ClassAddModal
