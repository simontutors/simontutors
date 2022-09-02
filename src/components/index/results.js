import * as React from "react"
const Results = () => {
  return (
    <div className="flex flex-col justify-center bg-base-300 py-20">
      <div class="flex justify-center gap-20 py-32">
        <table class="table-zebra table">
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
              <td>Milan H.</td>
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
        <table class="table-zebra table">
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
              <td>Xavier (HSPT)</td>
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
      <div class="flex justify-center">
        <p class="card bg-primary p-5  text-lg text-primary-content">
          This is a list of my one-on-one students and their results. Over the
          years I have tutored more than a hundred students in group settings.
          Some of them were SHSAT students, and many of them have also gone to a
          specialized high school.
        </p>
      </div>
    </div>
  )
}

export default Results
