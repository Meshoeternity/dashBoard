import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function CoachViewModal(props) {
  const { show, setShow, coach } = props
  console.log(coach)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View coach</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Full Name:</strong> {coach.firstName} {coach.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>{" "}
            <img src={coach.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item>
          {/* <strong>Sports:</strong>
          <ListGroup>
       
              <ListGroup.Item>
                <Image src={coach.sport.poster} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <span style={{ marginLeft: 10 }}>{coach.sport.title}</span>
              </ListGroup.Item>
          
          </ListGroup> */}
        </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CoachViewModal
