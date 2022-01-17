import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"
import AddIcon from "@mui/icons-material/Add"
import SportAddModal from "../components/SportAddModal"
import SportRow from "../components/SportRow"

function Sports() {
  const { sports } = useContext(SportsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Sports</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Title</th>
            <th style={{ width: "18%" }}>Poster</th>
            <th style={{ width: "18%" }}>description</th>
            <th style={{ width: "9%" }}>Coach</th>
            <th style={{ width: "36%" }}>Actions</th>

        
          </tr>
        </thead>
        <tbody>
          {sports.map(sport => (
            <SportRow key={sport._id} sport={sport} />
          ))}
        </tbody>
      </Table>
      <SportAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Sports
