import React, {useEffect, useState, useRef} from "react";
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';
import Modal2 from './Modal2';
import oc from 'open-color';


import { withStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: oc.teal[9],
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
      

const MenuPerson = () => {
    // const [data, setData] = useState(null); // 초기값을 null로 설정

    // useEffect(() => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open('GET', 'http://13.124.69.102:5000/user/all/', true);
      
    //   xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //       setData(JSON.parse(xhr.responseText));
    //     }
    //   };
  
    //   xhr.send();
    // }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 함
    // console.log(data);

    const d = [
        {
        id : 1, 
        user_id : "alkj", 
        password : "ajflakbn", 
        user_name : "alice", 
        nickname : "aa", 
        email : "alice@alkj", 
        team_id : 1, 
        is_manager : false
        },
        {
            id : 2, 
            user_id : "tom", 
            password : "alkjfl" , 
            user_name : "tom", 
            nickname : "imtom", 
            email : "tom@kaist.ac.kr", 
            team_id : 2, 
            is_manager : false
            },
        {
            id : 3, 
            user_id : "lee", 
            password : "alj" , 
            user_name : "lee", 
            nickname : "imlee", 
            email : "lee@kaist.k", 
            team_id : 1, 
            is_manager : false
            },
        {
            id : 4, 
            user_id : "Yam", 
            password : "alj" , 
            user_name : "yam", 
            nickname : "imyam", 
            email : "yam@lakj", 
            team_id : 0, 
            is_manager : true
            },
        {
            id : 5, 
            user_id : "Kim", 
            password : "alknel" , 
            user_name : "kim", 
            nickname : "imkim", 
            email : "kim@kial", 
            team_id : 2, 
            is_manager : false
            },
        {
            id : 6, 
            user_id : "PArk", 
            password : "alknel" , 
            user_name : "Park", 
            nickname : "impark", 
            email : "park@kial", 
            team_id : 3, 
            is_manager : false
            },
        {
            id : 7, 
            user_id : "Yea", 
            password : "alknealkjl" , 
            user_name : "yea", 
            nickname : "imyea", 
            email : "yea@kial", 
            team_id : 0, 
            is_manager : true
            },
        {
            id : 8, 
            user_id : "hee", 
            password : "alealkjl" , 
            user_name : "hee", 
            nickname : "imhee", 
            email : "hee@kial", 
            team_id : 4, 
            is_manager : false
            }

        ]
    const data_manager = d.filter(item=> item.is_manager === true)
    const data = d.filter(item=> item.is_manager===false)


        
    const [info, setinfo]= useState(data);
    const [info_ma, setinfo_ma] = useState(data_manager);
    const [selected, setselected]=useState('');
    const [modalOn, setmodalon] = useState(false);

    const nextId = useRef(10);

    const handleSave=(dataa)=>{
        if(dataa.is_manager==false) { //user
            //data 수정하기
            if(dataa.id ){
                setinfo(
                    info.map(row=> dataa.id===row.id ? {
                        id : dataa.id, 
                        user_id : dataa.user_id, 
                        password : dataa.password, 
                        user_name : dataa.user_name, 
                        nickname : dataa.nickname, 
                        email : dataa.email, 
                        team_id : dataa.team_id, 
                        is_manager : dataa.is_manager
                    }:row))
            }

            else{ //데이터 추가하기
                setinfo(info=> info.concat(
                    {
                        id : nextId.current,
                        user_id : dataa.user_id, 
                        password : dataa.password, 
                        user_name : dataa.user_name, 
                        nickname : dataa.nickname, 
                        email : dataa.email, 
                        team_id : dataa.team_id, 
                        is_manager : dataa.is_manager
                    }
                ))
                nextId.current +=1;
            }
        }

        else { //manager
            //data 수정하기
            if(dataa.id ){
                setinfo_ma(
                    info_ma.map(row=> dataa.id===row.id ? {
                        id : dataa.id, 
                        user_id : dataa.user_id, 
                        password : dataa.password, 
                        user_name : dataa.user_name, 
                        nickname : dataa.nickname, 
                        email : dataa.email, 
                        team_id : dataa.team_id, 
                        is_manager : dataa.is_manager
                    }:row))
            }

            else{ //데이터 추가하기
                setinfo_ma(info_ma => info_ma.concat(
                    {
                        id : nextId.current,
                        user_id : dataa.user_id, 
                        password : dataa.password, 
                        user_name : dataa.user_name, 
                        nickname : dataa.nickname, 
                        email : dataa.email, 
                        team_id : dataa.team_id, 
                        is_manager : dataa.is_manager
                    }
                ))
                nextId.current +=1;
            }
        }
        
    }
         
            const handleRemove = (id) => {
                setinfo(info => info.filter(item=> item.id !==id));
                setinfo_ma(info_ma => info_ma.filter(item=> item.id !==id));
            }
        
            const handleEdit= (item) => {
                setmodalon(true);
                const selectedData = {
                    id : item.id, 
                    user_id : item.user_id, 
                    password : item.password, 
                    user_name : item.user_name, 
                    nickname : item.nickname, 
                    email : item.email, 
                    team_id : item.team_id, 
                    is_manager : item.is_manager
                };
                console.log(selectedData)
                setselected(selectedData);
            };
        
            const handleCancel = () => {
                setmodalon(false);
            }
        
            const handleEditSubmit = (item) =>{
                console.log(item);
                handleSave(item);
                setmodalon(false);
            }
    
    
        
    
        return (
            <div className = 'container max-w-screen-lg mx-auto'>
                <span style={{fontSize: '2.5rem', fontWeight: '800'}}>사용자목록</span>
                
                <table className='min-w-full table-auto text-gray-800' style={{ marginTop: '30px' }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell>이름</StyledTableCell>
                            <StyledTableCell align="left">ID</StyledTableCell>
                            <StyledTableCell align="left">이메일</StyledTableCell>
                            <StyledTableCell align="left">비밀번호</StyledTableCell>
                            <StyledTableCell align="left">팀</StyledTableCell>
                            <StyledTableCell align="center">수정</StyledTableCell>
                            <StyledTableCell align="center">삭제</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/>
                </table>

                <span style={{fontSize: '2.5rem', fontWeight: '800'}}>관리자목록</span>

                <table className='min-w-full table-auto text-gray-800' style={{ marginTop: '30px' }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>#</StyledTableCell>
                        <StyledTableCell>이름</StyledTableCell>
                        <StyledTableCell align="left">ID</StyledTableCell>
                        <StyledTableCell align="left">이메일</StyledTableCell>
                        <StyledTableCell align="left">비밀번호</StyledTableCell>
                        <StyledTableCell align="center">수정</StyledTableCell>
                        <StyledTableCell align="center">삭제</StyledTableCell>
                    </TableRow>
                </TableHead>
                <Tr info={info_ma} handleRemove={handleRemove} handleEdit={handleEdit}/>
                </table>

                <Post onSaveData={handleSave}/>
                {modalOn && selected.is_manager===false && <Modal selectedData ={selected} handleCancel={handleCancel} handleEditSubmit={handleEditSubmit}/>}
                {modalOn && selected.is_manager===true && <Modal2 selectedData ={selected} handleCancel={handleCancel} handleEditSubmit={handleEditSubmit}/>}


            </div>

        
    );
};

export default MenuPerson;