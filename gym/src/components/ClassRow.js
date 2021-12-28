import { useState } from "react"
import { Button } from "react-bootstrap"
import ClassDeleteModal from "./ClassDeleteModal"
import ClassEditModal from "./ClassEditModal"

function ClassRow(props) {
  const { classs } = props

  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{classs._id}</td>
      <td>{classs.time}</td>
      <td>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <ClassDeleteModal show={deleteShow} setShow={setDeleteShow} classsId={classs._id} />
      <ClassEditModal show={editShow} setShow={setEditShow} classs={classs} />
    </tr>
  )
}

export default ClassRow
