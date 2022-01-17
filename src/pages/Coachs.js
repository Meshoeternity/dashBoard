import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"
import AddIcon from "@mui/icons-material/Add"
import UserRow from "../components/UserRow"
import AdminAddModal from "../components/AdminAddModal"
import CoachRow from "../components/CoachRow"
import CoachAddModal from "../components/CoachAddModal"

function Coachs() {
  const { coachs } = useContext(SportsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Coachs</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add Coach
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Full Name</th>
            <th style={{ width: "18%" }}>Photo</th>
            <th style={{ width: "18%" }}>sports</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {coachs.map(coach => (
            <CoachRow key={coach._id} coach={coach} />
          ))}
        </tbody>
      </Table>
      <CoachAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Coachs
