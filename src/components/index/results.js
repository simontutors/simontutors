import * as React from "react"

const Results = () => {
  return (
    <div class="grid-cols-12 gap-20 bg-slate-800 py-20 md:grid">
      <table class="col-span-5 col-start-2 table table-auto text-left">
        <thead>
          <tr>
            <th>Test Year</th>
            <th>Student</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2015</td>
            <td>Sudat K.</td>
            <td>Stuyvesant</td>
          </tr>
          <tr>
            <td>2016</td>
            <td>Yusha K.</td>
            <td>Stuyvesant</td>
          </tr>
          <tr>
            <td>2016</td>
            <td>Mark H.</td>
            <td>Brooklyn Tech</td>
          </tr>
          <tr>
            <td>2016</td>
            <td>Reese KD.</td>
            <td>HSMSE</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>Mason L.</td>
            <td>Brooklyn Tech</td>
          </tr>
        </tbody>
      </table>
      <table class="col-span-5 table table-auto text-left">
        <thead>
          <tr>
            <th>Test Year</th>
            <th>Student</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018</td>
            <td>Lucas SV.</td>
            <td>Brooklyn Tech</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>Jullian A.</td>
            <td>Xavier(HSPT)</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>EY</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>KS</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>Ethan M.</td>
            <td>Brooklyn Tech</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Results
