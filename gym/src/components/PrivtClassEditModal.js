import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function PrivtClassEditModal(props) {
  const { show, setShow, privtclassss } = props
  const { editprivtclass } = useContext(SportsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editprivtclass(e, privtclassss._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              TIME
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="time" defaultValue={privtclassss.time} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default PrivtClassEditModal