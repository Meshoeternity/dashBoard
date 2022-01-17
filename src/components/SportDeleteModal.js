import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function SportDeleteModal(props) {
  const { deleteSport } = useContext(SportsContext)
  const { show, setShow, sportId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Sport</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this sport ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteSport(sportId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SportDeleteModal
