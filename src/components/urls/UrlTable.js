import React from "react";

import { useSelector } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { CopyToClipboard } from "react-copy-to-clipboard";

export const UrlTable = () => {
  const url = useSelector((state) => state.url);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Copy</TableCell>
              <TableCell>Short url</TableCell>
              <TableCell>URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {url.data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <CopyToClipboard text={`${url.baseUrl}/${row.short_code}`}>
                    <Button variant="outlined" color="primary">
                      Copy
                    </Button>
                  </CopyToClipboard>
                </TableCell>
                <TableCell>
                  {url.baseUrl}/{row.short_code}
                </TableCell>
                <TableCell>{row.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
