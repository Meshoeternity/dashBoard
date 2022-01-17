import { useState } from "react"
import { Button } from "react-bootstrap"
import CoachDeleteModal from "./CoachDeleteModal"
import CoachEditModal from "./CoachEditModal"
import CoachViewModal from "./CoachViewModal"
import UserDeleteModal from "./UserDeleteModal"
import UserViewModal from "./UserViewModal"

function CoachRow(props) {
  const { coach } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{coach._id}</td>
      <td>
        {coach.firstName} {coach.lastName}
      </td>
      <td>
        <img src={coach.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      {coach.sport.map(sport=>
          <td>
            <p>{sport.title}</p>

             </td>
        )}
    
       
     
    
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
      <CoachViewModal show={viewShow} setShow={setViewShow} coach={coach} />
      <CoachEditModal show={editShow} setShow={setEditShow} coach={coach} />
      <CoachDeleteModal show={deleteShow} setShow={setDeleteShow} coachId={coach._id} />
    </tr>
  )
}

export default CoachRow
