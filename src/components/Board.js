import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';

function createData(num,name,id,email, password, team) {
    return { num,name,id,email, password, team };
  }


const Board = () => {
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

    const data=[
        {'num': 1,'name':'박쿵야','id':'laj','email':'ii@kaist.ac.kr','password':'lakaj','team':'1'},
        {'num': 2,'name':'박쿵야','id':'alkf','email':'ii@kaist.ac.kr','password':'lakaj','team':'1'},
        {'num': 3,'name':'박쿵야','id':'alkn','email':'ii@kaist.ac.kr','password':'lakaj','team':'1'},
        {'num': 4,'name':'박쿵야','id':'bnlkeja','email':'ii@kaist.ac.kr','password':'lakaj','team':'1'},
        {'num': 5,'name':'박쿵야','id':'nkwnek','email':'ii@kaist.ac.kr','password':'lakaj','team':'1'},
        {'num': 6,'name':'박쿵야','id':'qnkw','email':'ii@kaist.ac.kr','password':'lakaj','team':'1'}
        ];

        // const c = data[0].length;
        // const r = data.length;
        // var manager_num = 0;
    
        // for (var i=0;i<r;i++){
        //     if(data[i][5]==false) manager_num ++;
        // }
    
        // const rows = Array.from(new Array(c), () => new Array(r).fill(0));
        // var rows1= Array.from(new Array(c), () => new Array(r-manager_num).fill(0));
        // var rows2 = Array.from(new Array(c), () => new Array(manager_num).fill(0));;
    
    
        // for (i=0;i<r;i++){
        //     rows[i] = createData(data[i][0],data[i][1],data[i][2],data[i][3],data[i][4]);
        // }
        // var i1=0;
        // var i2=0;
        // for(var l=0;l<data.length;l++){
        //     if(data[l][5]==false) {
        //         rows2[i2]= rows[l];
        //         i2++;
        //     }
        //     else {
        //         rows1[i1]= rows[l];
        //         i1++;
        //     }
        // }
    
    
    
        const [info, setinfo]= useState(data);
        const [selected, setselected]=useState('');
        const [modalOn, setmodalon] = useState(false);
    
        const nextId = useRef(11);
    
        const handleSave=(data)=>{
            //data 수정하기
            if(data.num){
                setinfo(
                    info.map(row=> data.num===row.num ? {
                        num: data.num,
                        name: data.name,
                        id: data.id,
                        email: data.email,
                        password: data.password,
                        team: data.team
                    }:row))
            }
            else{ //데이터 추가하기
                setinfo(info=> info.concat(
                    {
                        num: nextId.current,
                        name: data.name,
                        id: data.id,
                        email: data.email,
                        pass : data.password,
                        team: data.team
                    }
                ))
                nextId.current +=1;
            }
        }
     
        const handleRemove = (num) => {
            setinfo(info => info.filter(item=> item.num !==num));
        }
    
        const handleEdit= (item) => {
            setmodalon(true);
            const selectedData = {
                num: item.num,
                name : item.name,
                id : item.id, 
                email: item.email,
                password: item.password,
                team: item.team
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
            <div className = 'text-xl font-bold mt-5 mb-3 text-center'>사용자 정보 리스트 </div>
            
            <table className='min-w-full table-auto text-gray-800'>
                <thead clasName='justify-between'>
                    <tr className='bg-gray-800'>
                        <th className = 'text-gray-300 px-4 py-3'>Num</th>
                        <th className = "text-gray-300 px-4 py-3">이름</th>
                        <th className = "text-gray-300 px-4 py-3">ID</th>
                        <th className = "text-gray-300 px-4 py-3">이메일</th>
                        <th className = "text-gray-300 px-4 py-3">비밀번호</th>
                        <th className = "text-gray-300 px-4 py-3">팀</th>
                        <th className = "text-gray-300 px-4 py-3">수정</th>
                        <th className = "text-gray-300 px-4 py-3">삭제</th>
                    </tr>
                </thead>
                <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/>

            </table>
            <Post onSaveData={handleSave}/>
            {modalOn && <Modal selectedData ={selected} handleCancel={handleCancel} handleEditSubmit={handleEditSubmit}/>}
            
            </div>
            
        
    );
};

export default Board;



// import React, {useEffect, useState, useRef} from "react";
// import axios from 'axios';
// import Tr from './Tr';
// import Post from './Post';
// import Modal from './Modal';
// import styled from 'styled-components';
// import oc from 'open-color';
// import { Link } from 'react-router-dom';
// import { shadow } from '../lib/styleUtil';

// import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';


// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: oc.teal[9],
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);
  
//   const StyledTableRow = withStyles((theme) => ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: oc.lime[1],
//       },
//       '&:nth-of-type(even)': {
//         backgroundColor: oc.lime[2],
//       },
//     },
//   }))(TableRow);
  
//   function createData(name,id,email, password, team) {
//     return { name,id,email, password, team };
//   }
  

  
  

// const CheckButton = styled(Link)`
//     font-weight: 600;
//     color: ${oc.red[9]};
//     border: 1px solid ${oc.red[9]};
//     padding: 0.4rem;
//     padding-bottom: 0.4rem;
//     cursor: pointer;
//     border-radius: 1.5px;
//     text-decoration: none;
//     transition: .2s all;
//     &:hover {
//         background: ${oc.red[9]};
//         color: white;
//         ${shadow(1)}
//     }
//     &:active {
//         /* 마우스 클릭시 아래로 미세하게 움직임 */
//         transform: translateY(3px);
//     }
// `;

// const AddButton = styled(Link)`
//     font-weight: 600;
//     color: ${oc.lime[9]};
//     border: 1px solid ${oc.lime[9]};
//     padding: 0.4rem;
//     padding-bottom: 0.4rem;
//     cursor: pointer;
//     border-radius: 1.5px;
//     text-decoration: none;
//     transition: .2s all;
//     &:hover {
//         background: ${oc.lime[9]};
//         color: white;
//         ${shadow(1)}
//     }
//     &:active {
//         /* 마우스 클릭시 아래로 미세하게 움직임 */
//         transform: translateY(3px);
//     }
// `;

// const Spacer = styled.div`
//     flex-grow: 1;
// `;




// const MenuPerson = () => {
//     // const [data, setData] = useState(null); // 초기값을 null로 설정

//     // useEffect(() => {
//     //   const xhr = new XMLHttpRequest();
//     //   xhr.open('GET', 'http://13.124.69.102:5000/user/all/', true);
      
//     //   xhr.onreadystatechange = function() {
//     //     if (xhr.readyState === 4 && xhr.status === 200) {
//     //       setData(JSON.parse(xhr.responseText));
//     //     }
//     //   };
  
//     //   xhr.send();
//     // }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 함
//     // console.log(data);

//     const data=[
//         ['박쿵야','imimi1','ii@kaist.ac.kr','lakaj','1',true],
//         ['박쿵야','imimi2','ii@kaist.ac.kr','lakaj','2',true],
//         ['박쿵야','imimi3','ii@kaist.ac.kr','lakaj','1',true],
//         ['박쿵야','imimi4','ii@kaist.ac.kr','lakaj','3',true],
//         ['박쿵야','imimi5','ii@kaist.ac.kr','lakaj','0',false],
//         ['박쿵야','imimi6','ii@kaist.ac.kr','lakaj','0',false],
//         ['박쿵야','imimi7','ii@kaist.ac.kr','lakaj','0',false],
//         ['박쿵야','imimi8','ii@kaist.ac.kr','lakaj','1',true],
//         ['박쿵야','imimi9','ii@kaist.ac.kr','lakaj','4',true]
//          ];

//     const c = data[0].length;
//     const r = data.length;
//     var manager_num = 0;

//     for (var i=0;i<r;i++){
//         if(data[i][5]==false) manager_num ++;
//     }

//     const rows = Array.from(new Array(c), () => new Array(r).fill(0));
//     var rows1= Array.from(new Array(c), () => new Array(r-manager_num).fill(0));
//     var rows2 = Array.from(new Array(c), () => new Array(manager_num).fill(0));;


//     for (i=0;i<r;i++){
//         rows[i] = createData(data[i][0],data[i][1],data[i][2],data[i][3],data[i][4]);
//     }
//     var i1=0;
//     var i2=0;
//     for(var l=0;l<data.length;l++){
//         if(data[l][5]==false) {
//             rows2[i2]= rows[l];
//             i2++;
//         }
//         else {
//             rows1[i1]= rows[l];
//             i1++;
//         }
//     }



//     const [info, setinfo]= useState([]);
//     const [selected, setselected]=useState('');
//     const [modalon, setmodalon] = useState(false);

//     const nextId = useRef(11);

//     const handleSave=(data)=>{
//         //data 수정하기
//         if(data.id){
//             setinfo(
//                 info.map(row=> data.id===row.id ? {
//                     name: data.name,
//                     id: data.id,
//                     email: data.email,
//                     password: data.password,
//                     team: data.team
//                 }:row))
//         }
//         else{ //데이터 추가하기
//             setinfo(info=> info.concat(
//                 {
//                     name: data.name,
//                     id: nextId.current,
//                     email: data.email,
//                     pass : data.password,
//                     team: data.team
//                 }
//             ))
//             nextId.current +=1;
//         }
//     }

//     const headleRemove = (id) => {
//         setinfo(info => info.filter(item=> item.id !==id));
//     }

//     const handleEdit= (item) => {
//         setmodalon(true);
//         const selectedData = {
//             name : item.name,
//             id : item.id, 
//             email: item.email,
//             password: item.password,
//             team: item.team
//         };
//         console.log(selectedData)
//         setselected(selectedData);
//     };

//     const handleCancel = () => {
//         setmodalon(false);
//     }

//     const handleEditSubsit = (item) =>{
//         console.log(item);
//         handleSave(item);
//         setmodalon(false);
//     }


    

//     return (
//         <div id="menu-person-container" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
//             <div id="menu-person-body1" style={{display: 'flex', flex: 1, marginBottom: '3rem'}}>
//                 <div id="menu-person-body1-header" style={{display: 'flex', flex: 1.5, padding: '1rem 1rem 0 1rem', alignItems: 'end'}}>
//                     <span style={{fontSize: '2.5rem', fontWeight: '800'}}>
//                         회원목록
//                     </span>
//                 </div>
//                 <Spacer/>
//                 <div id="menu-person-button1" style={{display: 'flex', flex: 1, alignItems: 'end'}}>
//                     <AddButton to="./">
//                         추가
//                     </AddButton>
//                     <CheckButton to="./">
//                         확인
//                     </CheckButton>
//                     </div>
//             </div>
//             <div id="menu-person-list1" style={{display: 'flex', flex: 1, marginBottom: '3rem'}}>
//             <TableContainer component ={Paper}>
//                 <Table classname = "app1" aria-label="customized table" >
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell>이름</StyledTableCell>
//                             <StyledTableCell align="left">ID</StyledTableCell>
//                             <StyledTableCell align="left">이메일</StyledTableCell>
//                             <StyledTableCell align="left">비밀번호</StyledTableCell>
//                             <StyledTableCell align="left">팀</StyledTableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows1.map((row)=> (
//                             <StyledTableRow key={row.name}>
//                             <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
//                             <StyledTableCell align="left">{row.id}</StyledTableCell>
//                             <StyledTableCell align="left">{row.email}</StyledTableCell>
//                             <StyledTableCell align="left">         </StyledTableCell>
//                             <StyledTableCell align="left">{row.team}</StyledTableCell>
//                           </StyledTableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             </div>
//             <div id="menu-person-body2" style={{display: 'flex', flex: 1, marginBottom: '3rem'}}>
//                 <div id="menu-person-body2-header" style={{display: 'flex', flex: 1.5, padding: '1rem 1rem 0 1rem', alignItems: 'end'}}>
//                     <span style={{fontSize: '2.5rem', fontWeight: '800'}}>
//                         관리자목록
//                     </span>
//                 </div>
//                 <Spacer/>
//                 <div id="menu-person-button2" style={{display: 'flex', flex: 1, alignItems: 'end'}}>
//                     <AddButton to="./">
//                         추가
//                     </AddButton>
//                     <CheckButton to="./">
//                         확인
//                     </CheckButton>
//                     </div>
//             </div>
//             <div id="menu-person-list2" style={{display: 'flex', flex: 1, marginBottom: '3rem'}}>
//             <TableContainer component ={Paper}>
//                 <Table classname = "app2" aria-label="customized table" >
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell>이름</StyledTableCell>
//                             <StyledTableCell align="left">ID</StyledTableCell>
//                             <StyledTableCell align="left">이메일</StyledTableCell>
//                             <StyledTableCell align="left">비밀번호</StyledTableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows2.map((row)=> (
//                             <StyledTableRow key={row.name}>
//                             <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
//                             <StyledTableCell align="left">{row.id}</StyledTableCell>
//                             <StyledTableCell align="left">{row.email}</StyledTableCell>
//                             <StyledTableCell align="left">         </StyledTableCell>
//                           </StyledTableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             </div>
//         </div>
        
//     );
// };

// export default MenuPerson;