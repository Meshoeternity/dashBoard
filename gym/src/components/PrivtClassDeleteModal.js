import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function PrivtClassDeleteModal(props) {
  const { deletePrivtClass } = useContext(SportsContext)
  const { show, setShow, privtclassId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete privtClass</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this privtclass ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deletePrivtClass(privtclassId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PrivtClassDeleteModal