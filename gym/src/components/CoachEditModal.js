import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function CoachEditModal(props) {
  const { show, setShow, coach } = props
  const { editCoach } = useContext(SportsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editCoach(e, coach._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Coach</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" defaultValue={coach.firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={coach.lastName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={coach.photo} />
            </Col>
          </Form.Group>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Coach
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CoachEditModal
