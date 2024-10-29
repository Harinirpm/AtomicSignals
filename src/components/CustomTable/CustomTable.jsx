import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatars from '../../atoms/Avatar/Avatar';
import Progress from '../../atoms/SemiCircleProgressbar/ProgressBar';
import Avatar1 from "../../assets/avatar2.jpeg";
import NameWithAvatar from "../../atoms/Avatar/NameWithAvatar";
import IosSwitch from '../../atoms/IosSwitch/IosSwitch';
import AddFeedback from "../../atoms/CustomButton/AddFeedback";
import Teams from "../../pages/Teams/Teams.json";
import CustomTableStyles from "../CustomTable/CustomTableStyles";
import { useState } from 'react';
const columns = [
  { id: 'name', label: 'Name', minWidth: 210 },
  { id: 'designation', label: 'Designation', minWidth: 210 },
  { id: 'department', label: 'Department', minWidth: 210, align: 'left' },
  { id: 'signals', label: 'Signals', minWidth: 210, align: 'left' },
  { id: 'overallPerformance', label: 'Overall Performance', minWidth: 210, align: 'center' },
  { id: 'reporting', label: 'Reporting To', minWidth: 210, align: 'left' },
  { id: 'roll', label: 'Roll', minWidth: 210, align: 'left' },
  { id: 'email', label: 'Email', minWidth: 210, align: 'left' },
  { id: 'experience', label: 'Experience', minWidth: 210, align: 'left' },
  { id: 'status', label: 'Status', minWidth: 210, align: 'left' },
  { id: 'action', label: 'Action', minWidth: 210, align: 'left', stickyRight: true },
];
function CustomTable({ members }) {
  const combinedMembers = [...Teams, ...members];
  // const [combinedMembers, setCombinedMembers] = useState([...Teams, ...members]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleEditClick = (memberId) => {
    const memberToEdit = combinedMembers.find((member) => member.id === memberId);
    setEditableMember(memberToEdit);
  };
  const handleUpdateMember = (updatedMember) => {
    setCombinedMembers((prevMembers) =>
      prevMembers.map((member) => (member.id === updatedMember.id ? updatedMember : member))
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const rows = combinedMembers.map((member, index) => ({
    name: <NameWithAvatar name={member.name} avatarSrc={Avatar1} />,
    designation: member.designation,
    department: member.department,
    signals: <Avatars />,
    overallPerformance: <Progress />,
    reporting: <NameWithAvatar name={member.reportingTo} avatarSrc={Avatar1} />,
    roll: "Roll info", 
    email: member.email,
    experience: member.dateOfJoining, 
    status: <IosSwitch name={"Active"} />, 
    action: <AddFeedback
    memberId={member.id}
    memberDetails={member}
    onEdit={handleUpdateMember} 
  />
  }));

  return (
    <Paper sx={CustomTableStyles.rootStyle}>
      <TableContainer sx={CustomTableStyles.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ 
                    minWidth: column.minWidth,
                    position: column.stickyRight ? 'sticky' : 'static', 
                    right: column.stickyRight ? 0 : 'auto',
                    backgroundColor: column.stickyRight ? '#fff' : 'inherit',
                    zIndex: column.stickyRight ? 1 : 'auto',
                    borderLeft: column.stickyRight ? '1px solid rgba(224, 224, 224, 1)' : "", 
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        borderBottom: 'none',
                        padding: '0px 10px',
                        ...(column.stickyRight && {
                          position: 'sticky',
                          right: 0,
                          backgroundColor: 'white',
                          zIndex: 1, 
                          borderLeft: '1px solid rgba(224, 224, 224, 1)',
                        }),
                        fontSize: "16px"
                      }}
                    >
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ borderTop: '1px solid gray' }}
      />
    </Paper>
  );
}

export default CustomTable;
