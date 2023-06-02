"use client";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  Stack,
  Avatar,
  Typography,
  TablePagination,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo } from "react";

const AdminTable = () => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [admins, setAdmins] = React.useState<any[]>([]);
  const { data } = useQuery({
    queryKey: ["admins"],
    queryFn: () =>
      fetch("https://dummyjson.com/users").then((res) => res.json()),
  });
  useEffect(() => {
    setAdmins(data?.users);
  }, [data]);
  const selectedSome = useMemo(() => {
    return selected.length > 0 && selected.length < admins?.length;
  }, [admins, selected]);
  const selectedAll = useMemo(() => {
    return admins?.length > 0 && selected.length === admins?.length;
  }, [admins, selected]);

  return (
    <Box sx={{ minWidth: 800, borderRadius: 2, boxShadow: 1 }}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#F3F4F6",
              "& th": { fontWeight: "bold" },
            }}
            className="uppercase"
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedAll}
                indeterminate={selectedSome}
                onChange={(event) => {
                  if (event.target.checked) {
                    setSelected(admins.map((item: any) => item.id));
                  } else {
                    setSelected([]);
                  }
                }}
              />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Phone</TableCell>
            {/* <TableCell>Signed Up</TableCell> */}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((customer: any) => {
              const isSelected = selected.includes(customer.id);

              return (
                <TableRow hover key={customer.id} selected={isSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSelected((prevSelected) => [
                            ...prevSelected,
                            customer.id,
                          ]);
                        } else {
                          setSelected((prevSelected) =>
                            prevSelected.filter((id) => id !== customer.id)
                          );
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <Avatar src={customer.image}>{customer.firstName}</Avatar>
                      <Typography variant="subtitle2">
                        {customer.firstName} {customer.lastName}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>
                    {customer.address.address}, {customer.address.city},{" "}
                    {customer.address.state}
                  </TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  {/* <TableCell>{dateFormat(customer.createdAt)}</TableCell> */}
                  <TableCell>
                    <div className="flex gap-2">
                      <button>
                        <PencilSquareIcon className="w-6 h-6" />
                      </button>
                      <button>
                        <TrashIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={admins?.length}
        onPageChange={(event, value) => {
          setPage(value);
        }}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(Number(event.target.value));
        }}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Box>
  );
};

export default AdminTable;
