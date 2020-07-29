import React from 'react';

class EmployeeTable extends React.Component {
    render () {
        var employees = [
            { empId: 1234, name: 'Jack', designation:'SE', salary:23000},
            { empId: 4567, name: 'Johnson', designation:'SSE', salary:15000},
            { empId: 8910, name: 'Sachin',designation:'TA', salary:30000}
          ]

          return (
              <React.Fragment>
                  <h1>Go Karuna Go</h1>
                  <table>
                      <thead>
                          <thead>
                              <th>Emp. I.D.</th>
                              <th>Emp. NAME</th>
                              <th>Emp. DESIGNATION</th>
                              <th>Emp. SALARY</th>
                          </thead>
                          <tbody>
                              {employees.map(employee => {
                                  return employee.salary > 22000 ? (
                                      <tr>
                                          <td>{employee.empId}</td>
                                          <td>{employee.name}</td>
                                          <td>{employee.designation}</td>
                                          <td>{employee.salary}</td>
                                      </tr>
                                  ) : null;
                              })}
                          </tbody>
                      </thead>
                  </table>
              </React.Fragment>
          )
    }
}

export default EmployeeTable