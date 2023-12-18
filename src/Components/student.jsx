import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Studta() {
   
  return (
    <div>
      <Container fluid className="p-5">
       
        <Table responsive="sm" striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#id</th>
              <th>Student Name</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>D.o.B</th>
              <th>School Name</th>
              <th>Class</th>
              <th>Contact no.</th>
              <th>Score Card</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
        
      </Container>

    </div>
  );
}

export default Studta;
