import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function UserAddModal(props) {
  const { show, setShow } = props
  const { addUser} = useContext(SportsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addUser}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            First Name
          </Form.Label>
          <Col md="6">
            <Form.Control name="firstName" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Last Name
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" name="lastName" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col md="6">
            <Form.Control type="url" name="avatar" required />
          </Col>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add User
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default UserAddModal
