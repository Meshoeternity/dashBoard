import { Button, ListGroup, Modal } from "react-bootstrap"

function ClassViewModal(props) {
  const { show, setShow, classes } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View CLASS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>CLASSES:</strong> {classes.time}
          </ListGroup.Item>
        </ListGroup>
        <strong>Sports:</strong>
          <ListGroup>
       
              <ListGroup.Item>
                <Image src={classes.sport.poster} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <span style={{ marginLeft: 10 }}>{classes.sport.title}</span>
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

export default ClassViewModal
