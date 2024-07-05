import { useReactTable } from "@tanstack/react-table";
// import data from

function Table() {
  // useReactTable({
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>22</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
