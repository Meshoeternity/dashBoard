import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"
import AddIcon from "@mui/icons-material/Add"
import PrivtClassRow from "../components/PrivtClassRow"
import PrivtClassAddModal from "../components/PrivtClassAddModal"

function PrivtClass() {
  const { privtclass } = useContext(SportsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>PrivtClass</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "58%" }}>Time</th>
            <th style={{ width: "58%" }}>Coach</th>
           
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {privtclass.map(privtclassss => (
            <PrivtClassRow key={privtclassss._id} privtclassss={privtclassss} />
          ))}
        </tbody>
      </Table>
      <PrivtClassAddModal show={show} setShow={setShow} />
    </>
  )
}

export default PrivtClass
