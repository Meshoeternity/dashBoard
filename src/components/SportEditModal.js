import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function SportEditModal(props) {
  const { show, setShow, sport } = props
  const { classes, editSport, coachs } = useContext(SportsContext)
  console.log(classes)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editSport(e, sport._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Sport</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={sport.title}  />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" defaultValue={sport.poster} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            description
            </Form.Label>
            <Col md="8">
              <Form.Control type="textarea" name="description" defaultValue={sport.description}  />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              COACH
            </Form.Label>
            <Col md="8">
              {coachs.map(coach => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check
                      type="radio"
                      name="coach"
                      defaultChecked={sport.coach?._id === coach._id}
                      value={coach._id}
                    />
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
              CLASSES
            </Form.Label>
            <Col md="4">
              {classes.map(classObject => (
                <Row>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="classes"
                      defaultChecked={sport.classes.find(classSport => classSport._id === classObject._id)}
                      value={classObject._id}
                    />
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
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default SportEditModal
