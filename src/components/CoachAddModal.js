import { useContext } from "react"
import { Button, Col, Form, Modal, Row,Image } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function CoachAddModal(props) {
  const { show, setShow,coach } = props
  const { addCoach,sports } = useContext(SportsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addCoach}>
        <Modal.Header closeButton>
          <Modal.Title>Add Coach</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Coach
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CoachAddModal
