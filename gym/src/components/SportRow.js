import { useState } from "react"
import { Button } from "react-bootstrap"
import SportDeleteModal from "./SportDeleteModal"
import SportEditModal from "./SportEditModal"
import SportViewModal from "./SportViewModal"

function SportRow(props) {
  const { sport } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{sport._id}</td>
      <td>{sport.title}</td>
     
      <td>
        <img src={sport.poster} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{sport.coach?.firstName} {sport.coach?.lastName}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <SportViewModal show={viewShow} setShow={setViewShow} sport={sport} />
      <SportDeleteModal show={deleteShow} setShow={setDeleteShow} sportId={sport._id} />
      <SportEditModal show={editShow} setShow={setEditShow} sport={sport} />
    </tr>
  )
}

export default SportRow
