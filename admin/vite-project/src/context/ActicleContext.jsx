import { createContext, useState } from "react";

export const ActicleContext = createContext({})

export const ActicleProvier = ({ children }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('price');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [datarow, setRows] = useState([])
  return <ActicleContext.Provider value={
    {
      order, setOrder, orderBy, setOrderBy,
      selected, setSelected, page, setPage,
      rowsPerPage, setRowsPerPage, datarow, setRows
    }
  }>
    {children}
  </ActicleContext.Provider>
}