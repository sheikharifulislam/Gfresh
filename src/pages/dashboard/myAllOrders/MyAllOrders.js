import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import {Box, Button} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import swal from 'sweetalert';
import CircularLoader from '../../../customComponent/circularLoader/CircularLoader';
import {FirebaseContext} from '../../../context/FirebaseProvider';
import { useNavigate } from 'react-router-dom';;

const MyAllOrders = () => {

    const [myAllOrders, setMyAllOrders] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [dataLoading, setDataLoading] = useState(true);
    const {user} = useContext(FirebaseContext);  
    const navigate = useNavigate();
    const size = 15; 
    useEffect(() => {
        setDataLoading(true);
        if(user.email !== undefined) {
            axios.get(`http://localhost:5000/all-orders?currentPage=${currentPage}&&size=${size}&&userEmail=${user.email}`)
            .then((response) => {
                setMyAllOrders(response.data.allOrders);                     
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
        }
    }, [currentPage,user.email]);

    if(dataLoading)return <CircularLoader height="95vh" />

    const handleOrderStatus = (id,status) => {             
        swal({
            text: `Are You Sure You Want To ${status} The Order ?`,
            buttons: ['Cancle', 'Sure']
        })
        .then((value) => {
            if(value) {
                axios.patch(`http://localhost:5000/update-order-status?orderId=${id}`,{updateStatus: `${status.toLowerCase()}`})
                .then((response) => {                   
                   if(response.data.modifiedCount) {
                       const updateOrderData = [...myAllOrders];
                       for(let order of updateOrderData) {
                           if(order._id === id) {
                            order.orderInfo.orderStatus = status.toLowerCase();
                           }
                       }
                       setMyAllOrders(updateOrderData);
                       swal({
                           icon: 'success',
                           text: `Succefully ${status} the Order`,
                           button: 'ok',
                       })                       
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

    const handleReview = (productId, orderId) => {
        navigate(`/product-review?productId=${productId}&&orderId=${orderId}`, {
            replace: true,
        })
    }
    
    return (
        <>
            {
                myAllOrders?.length >= 1 ?
                    <section id="manage-all-orders">
                        <TableContainer component={Paper}>
                            <Table  aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Customar Name</TableCell>
                                        <TableCell align="center">Product Name</TableCell>                            
                                        <TableCell align="center">Order Quantity</TableCell>
                                        <TableCell align="center">Order Date</TableCell>
                                        <TableCell align="center">Order Status</TableCell>   
                                        <TableCell align="center">Action</TableCell>           
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                            {
                                myAllOrders.map((data) => (
                                    <TableRow       
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    key={data._id}                            
                                    >
                                        
                                        <TableCell component="th" scope="row" style={{width: '15%'}}>
                                            {data.userInfo.userName.slice(0, 12)}
                                        </TableCell>
                                        <TableCell component="th" scope="row" style={{
                                            width: '25%',
                                            textAlign: 'center',
                                            }}>
                                            {data.productInfo.productName.slice(0,30)}
                                        </TableCell>
                                        <TableCell component="th" scope="row" style={
                                            {
                                            width: '13%',
                                            textAlign: 'center',                                            
                                            }}>
                                            {data.orderInfo.orderQuantity}
                                        </TableCell>
                                        <TableCell component="th" scope="row" style={{
                                            width: '11%',
                                            textAlign: 'center',                                            
                                            }}>
                                            {data.orderInfo.orderDate}
                                        </TableCell>
                                        <TableCell component="th" scope="row" style={{
                                            width: '15%',
                                            textAlign: 'center',
                                            color: data.orderInfo.orderStatus === 'confirm' ? 'green' : data.orderInfo.orderStatus === 'cancle' ? 'red' : '#333',  
                                            }}>
                                            {data.orderInfo.orderStatus}
                                        </TableCell>                                
                                                                    
                                        <TableCell align="center" style={{
                                            width: '21%',
                                            }}
                                        >                                   
                                            {
                                                data.orderInfo.orderStatus === 'pending' &&
                                                    <Box>
                                                        <Button style={{
                                                            textAlign: 'right',
                                                            backgroundColor: 'green',
                                                            color: '#f5f5f5',
                                                            marginRight: '4px',
                                                            fontSize: '10px'
                                                            }}
                                                            onClick={() => handleOrderStatus(data._id, 'Confirm')}
                                                            >
                                                                Confirm
                                                        </Button>
                                                        <Button style={{
                                                            textAlign: 'right',
                                                            backgroundColor: 'red',
                                                            color: '#f5f5f5',
                                                            fontSize: '10px',
                                                            }}
                                                            onClick={() => handleOrderStatus(data._id, 'Cancle')}>
                                                                Cancle
                                                        </Button>
                                                    </Box>
                                            }
                                            {
                                                data.orderInfo.orderStatus === 'confirm' &&
                                                <Box>
                                                        <Button style={{
                                                            textAlign: 'right',
                                                            backgroundColor: 'green',
                                                            color: '#f5f5f5',
                                                            marginRight: '4px',
                                                            fontSize: '10px'
                                                            }}
                                                            onClick={() => handleReview(data.productInfo._id, data._id)}
                                                            >
                                                                Review
                                                        </Button>                                                        
                                                    </Box>
                                            }                        
                                        </TableCell>                            
                                    </TableRow>
                                ))
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {
                        totalPage > size &&
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
                    }
                </section>
                :
                <div className="order-not-found-message" style={{
                    height: '75vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                   
                }}>
                    <h1>404 Order Not Found</h1>
                </div>
            }
        </>
    );
};

export default React.memo(MyAllOrders);