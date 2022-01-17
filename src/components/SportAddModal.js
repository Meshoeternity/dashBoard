import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function SportAddModal(props) {
  const { show, setShow } = props
  const { classes, addSport,coachs} = useContext(SportsContext)
  return (
    <Modal show={show} onHide={(e) => setShow(false)}>
      <Form onSubmit={addSport}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sport</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
         
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            description
            </Form.Label>
            <Col md="8">
              <Form.Control type="textarea" name="description" required />
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
                    <Form.Check type="radio" name="coach" value={coach._id} />
                  </Col>
                  <Col md="8">
                    <Image src={coach.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                    <span style={{ marginLeft: 10 }}>
                      {coach.firstName} {coach.lastName}
                    </span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Classes
            </Form.Label>
            <Col md="8">
              {classes.map(classObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="classes" value={classObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{classObject.time}</span>
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
            Add sport
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default SportAddModal
