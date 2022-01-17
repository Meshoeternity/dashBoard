import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function ClassDeleteModal(props) {
  const { deleteClass } = useContext(SportsContext)
  const { show, setShow, classsId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Class</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this class ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteClass(classsId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ClassDeleteModal
