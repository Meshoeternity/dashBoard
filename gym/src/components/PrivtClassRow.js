import { useState } from "react"
import { Button } from "react-bootstrap"
import PrivtClassDeleteModal from "./PrivtClassDeleteModal"
import PrivtClassEditModal from "./PrivtClassEditModal"

function PrivtClassRow(props) {
  const {privtclass} = props

  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{privtclass._id}</td>
      <td>{privtclass.time}</td>
      <td>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <PrivtClassDeleteModal show={deleteShow} setShow={setDeleteShow} privtclassId={privtclass._id} />
      <PrivtClassEditModal show={editShow} setShow={setEditShow} privtclass={privtclass} />
    </tr>
  )
}

export default PrivtClassRow
