import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function SportViewModal(props) {
  const { show, setShow, sport } = props
  console.log(sport.classes)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Sport</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {sport.title}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Poster:</strong>{" "}
            <img src={sport.poster} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Classes:</strong>
            <ListGroup>
              {sport.classes.map(classs => (
                <ListGroup.Item>{classs.time}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>COACH:</strong>
            <ListGroup>
              <ListGroup.Item>
                <Image src={sport.coach?.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <span style={{ marginLeft: 10 }}>
                  {sport.coach?.firstName} {sport.coach?.lastName}
                </span>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SportViewModal
