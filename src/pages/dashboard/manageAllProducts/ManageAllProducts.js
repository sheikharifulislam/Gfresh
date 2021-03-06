import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import {Button} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import swal from 'sweetalert';
import './manageAllProduct.css';
import CircularLoader from '../../../customComponent/circularLoader/CircularLoader';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../../utils/baseurl';

const ManageAllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [dataLoading, setDataLoading] = useState(true);  
    const navigate = useNavigate()  
    const size = 15;
    const baseUrl = baseurl();

    useEffect(() => {
        setDataLoading(true);
        axios.get(`${baseUrl}products/manage-all-products?currentPage=${currentPage}&&size=${size}`)
        .then((response) => {
            setAllProducts(response.data.allProducts);            
            const totalPageNumber = Math.ceil(response.data.count / size);
            setTotalPage(totalPageNumber);
            setDataLoading(false);
        })
        .catch(() => {
            swal({
                icon: 'error',
                text: 'Something went wrong Please Reload And Try Again',
                button: 'ok',
            })
            setDataLoading(false);
        })
        .finally(() => {
            setDataLoading(false);
        })
    }, [currentPage,baseUrl]);

    if(dataLoading)return <CircularLoader height="95vh" />

    const handleProductDelete = (e,id,imagePath) => {             
        swal({
            text: 'Are You Sure You Want To Delete The Product ?',
            buttons: ['Cancle', 'Sure']
        })
        .then((value) => {
            if(value) {
                axios.delete(`${baseUrl}products/delete-single-product?productId=${id}&&imagePath=${imagePath}`)
                .then((response) => {
                   if(response.data.deletedCount) {
                       swal({
                           icon: 'success',
                           text: 'Succefully Delete the Product',
                           button: 'ok',
                       })
                       e.target.parentElement.parentElement.remove();                                    
                       
                    }
                })
                .catch(() => {
                    swal({
                        icon: 'error',
                        text: 'Something went wrong Please Reload And Try Again',
                        button: 'ok',
                    })
                })
            }
        })
    }

    const handleUpdateButton = (id)=> {
        navigate(`/dashboard/update-product-info/${id}`, {
            replace: true,
        })
    }
    
    return (
        <section id="manage-all-products">
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="center">Main Price</TableCell>
                            <TableCell align="center">Offer Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>  
                            <TableCell align="center">Action</TableCell>           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        allProducts.map((data) => (
                            <TableRow       
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            key={data._id}                            
                            >
                                <TableCell component="th" scope="row" style={{width: '30%'}}>
                                    {data.productName}
                                </TableCell>
                                <TableCell align="center">
                                    {data.mainPrice} $
                                </TableCell>
                                <TableCell align="center">
                                    {data.offerPrice ? `${data.offerPrice} $` : ''}
                                </TableCell>
                                <TableCell align="center">
                                    {data.quantity}
                                </TableCell>                            
                                <TableCell align="center">
                                    <Button style={{
                                        textAlign: 'right',
                                        marginRight: '7px',
                                        backgroundColor: 'dodgerblue',
                                        color: '#f5f5f5',
                                        }}
                                        variant="outlined"
                                        onClick={() => handleUpdateButton(data._id)}                                        
                                        >
                                            Update
                                    </Button> 
                                    <Button style={{
                                        textAlign: 'right',
                                        backgroundColor: 'red',
                                        color: '#f5f5f5',
                                        }}
                                        variant="outlined"
                                        onClick={(e) => handleProductDelete(e,data._id, data.productImage)}>
                                            Delete
                                    </Button>                        
                                </TableCell>                            
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="pagination">
                {
                    [...Array(totalPage).keys()].map((number) => (
                        <button
                        key={number}
                        id={number === currentPage ? 'active-page' : ''}
                        onClick={() => setCurrentPage(number)}
                        >
                            {number + 1}
                        </button>
                    ))
                }
            </div>
        </section>
    );
};

export default ManageAllProducts;