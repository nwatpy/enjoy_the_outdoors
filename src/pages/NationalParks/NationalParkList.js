import "../../App.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
function NationalParkList(parkList) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Location Name</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Location ID</th>
          <th>Park Details</th>
        </tr>
      </thead>
      <tbody>
        {parkList.parkList.map((park) => {
          return (
            <tr key={park.LocationId}>
              <td>
                <a target="_blank" rel="noreferrer" href={park.Visit}>
                  {park.LocationName}
                </a>
              </td>
              <td>{park.Address}</td>
              <td>{park.City}</td>
              <td>{park.State}</td>
              <td>{park.LocationID}</td>
              <td>
                <Link to={`/parkinfo/${park.LocationID}/${park.LocationName}`}>Link </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default NationalParkList;
