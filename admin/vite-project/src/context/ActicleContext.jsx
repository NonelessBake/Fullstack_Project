import { createContext, useState, useMemo, useEffect } from "react";
import request from "../utils/HTTP";
export const ActicleContext = createContext({})

function getData(callback) {
    request.get('Products')
        .then((res) => {
            return res.data
        })
        .then(callback)
}
export const ActicleProvier = ({ children }) => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('');
    const [selected, setSelected] = useState([]);
    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const rows = data.map((product) => {
        return {
            name: product.name,
            price: product.price,
            discount: product.discount,
            category: product.category,
            tags: product.tags
        }
    })
    // handle table operation
    const handleRequestSort = (event, property) => {
        console.log(property)
        console.log(order)
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    // chưa hoàn thiện
    // const handleClickButton = () => {
    //     selected.map((item) => {
    //         handlerDelete(item)
    //     })
    //     console.log(row)
    // }
    // let handlerDelete = (id) => {
    //     let findTask = row.findIndex((taskItem) => {
    //         if (taskItem.name == id) {
    //             let arr = []
    //             arr.push(taskItem.name)
    //         }
    //     })
    //     console.log(findTask)
    //     // console.log(findTask)
    //     // let newArr =[...row]
    //     // newArr.splice(findTask,)
    //     // setrow(newArr)
    // }
    // ------------------------------
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    //     
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1]
        });
        return stabilizedThis.map((el) => el[0]);
    }
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    return <ActicleContext.Provider value={
        {
            order, setOrder,
            orderBy, setOrderBy,
            selected, setSelected,
            page, setPage,
            rowsPerPage, setRowsPerPage,
            data,setData,
            handleRequestSort, handleSelectAllClick, handleClick,
            handleChangePage, handleChangeRowsPerPage, isSelected,
            stableSort, getComparator, rows, getData
        }}>
        {children}
    </ActicleContext.Provider>
}