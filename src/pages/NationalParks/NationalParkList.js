import "../../App.css";
import parklist from "../../assets/data/nationalparks.json";
import Table from "react-bootstrap/Table";

function NationalParkList() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Location Name</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Location ID</th>
        </tr>
      </thead>
      <tbody>
        {parklist.parks.map((park) => {
          return (
            <tr key={park.LocationId}>
              <td>{park.LocationName}</td>
              <td>{park.Address}</td>
              <td>{park.City}</td>
              <td>{park.State}</td>
              <td>{park.LocationID}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default NationalParkList;
