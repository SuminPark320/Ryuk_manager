import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route , useNavigate} from 'react-router-dom';
import '../css/MainPage.css'
import MenuUser from './MenuUser';
import MenuMission from './MenuMission';
import MenuTeam from './MenuTeam';
import MenuPerson from './MenuPerson';
import Header2 from './Header2';
import Sidebar from './Sidebar';
import useDetectClose from './useDetectClose';
import { Dropdown } from 'bootstrap';
import { Menu } from '@material-ui/core';
import {ReactComponent as SearchIcon} from '../image/search.svg';
import styled from 'styled-components';



export default function MainPage() {
    const data = [
        {
            id :1,
            name : '1',
            link :'1',
            category: '',
            introduce : '',
            master_id : '',
            start_day  :'',
            end_day :''
        },
        {
            id :2,
            name : '2',
            link :'2',
            category: '',
            introduce : '',
            master_id : '',
            start_day  :'',
            end_day :''
        },
        {
            id :3,
            name : '3',
            link :'3',
            category: '',
            introduce : '',
            master_id : '',
            start_day  :'',
            end_day :''
        },
        {
            id :4,
            name : '4',
            link :'4',
            category: '',
            introduce : '',
            master_id : '',
            start_day  :'',
            end_day :''
        }
    ]


    const idList = data.map(item => item.name);

    const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(idList);

    const navigate = useNavigate();

    const handleTeamChange = (e) => {
        const selectedTeamId = e.target.value;
        if (selectedTeamId) {
          // 선택한 팀의 ID를 기반으로 해당 팀 페이지로 이동
          navigate(`/team/${selectedTeamId}`);
        }
      };

    const [searchItem, setSearchItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState('1');
    
    const [cleanedData, setCleanedData] = useState(1);


    // useEffect(()=> {
    //     setCleanedData(cleanedData);
    // });



    return (
        <div id="container">
            <Header2 />
            <Sidebar />
            <div id="main">
            <DropdownWrapper>
                <DropdownBox
                    onClick={()=>
                        {isOpen ? setIsOpen(false) : setIsOpen(true)}}
                >
                    {item}
                    <Arrow>▼</Arrow>
                </DropdownBox>
                {isOpen ?  
                    <SelectWrapper>      
                        <IconPosition><SearchIcon/></IconPosition>
                        <SelectInput
                            type="text"
                            placeholder="Search Symbol"
                            onChange={(e)=>{
                                setSearchItem(e.target.value);
                            }}
                            
                        
                        ></SelectInput><hr/>                  
                        {idList.filter((data)=> {
                            if(searchItem == ''){
                                return data
                            }else if(data.toLowerCase().includes(searchItem.toLowerCase())){
                                return data
                            }
                        }).map(data => {
                            return <SelectOptions onClick={()=>{
                                setCleanedData(data);
                                setItem(data); setIsOpen(false);}}>{data}</SelectOptions>;
                            
                        })
                    
                        }
                    </SelectWrapper>
                :''}
            </DropdownWrapper>
 
                <Routes> 
                    <Route path="menu-user" element={<MenuUser info={cleanedData} />} />
                    <Route path="menu-mission" element={<MenuMission info={cleanedData} />} />
                    {/* <Route path="menu-user" element={<MenuUser />} />
                    <Route path="menu-mission" element={<MenuMission />} /> */}
                    <Route path="menu-team" element={<MenuTeam />} />
                    <Route path="menu-person" element={<MenuPerson />} />
                    <Route path="*" element={<MenuUser />} />
                </Routes>
                <div id="footer"/>
            </div>
        </div>
    );
    
}


  const DropdownWrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 300px;
  `
const DropdownBox = styled.div`
  width: 240px;
  padding: 14px 10px 14px 10px;
  margin: 0 30% 5px 30%;
  border: 1px solid var(--shadow);
  border-radius: 5px; 
  background: var(--white);
  line-height: 15px;
  cursor: pointer;
  position: relative;
  `
const Arrow = styled.div`
  position: absolute;
  top: 14px;
  left: calc(100% - 22px);
  font-size: 0.6em;
`
const SelectWrapper = styled.div`
  width: 240px;    
  padding-bottom: 10px;
  margin: 0 30% 40px 30%;
  border: 1px solid var(--shadow);
  border-radius: 5px; 
  background: var(--white);
  line-height: 15px;
  position: relative;
  box-shadow: 0 1px 1px 0 var(--shadow), 0 1px 5px 0 var(--grey-light);
`
const IconPosition = styled.div`
  margin: 5px;
  position: absolute;
  top: 8px;
  left: 5px;
  width: 12px;
  path{
      fill: var(--shadow);
  }
`
const SelectInput = styled.input`
  width: 200px;
  margin-left: 20px;    
  padding: 10px 0 5px 10px;    
  border-radius: 5px; 
  background: var(--white);
  line-height: 15px;
`
const SelectOptions = styled.div`
  width: 100%;
  padding: 10px;    
  background: var(--white);
  line-height: 15px;
  cursor: pointer;
  :hover {
      background: var(--white-second);
  }
  `




