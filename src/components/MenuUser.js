import React, { useState } from 'react';
import checkImage from '../assets/check.png';
import failImage from '../assets/fail.png';
import cantSendMsgImage from '../assets/cant_send.png';
import canSendMsgImage from '../assets/send.png';
import missionImage from '../assets/sample.png';
import '../css/MenuUser.css';  // CSS 파일을 임포트합니다.

const MenuUser = (e) => {
    const id = parseInt(e.info,10);

    const teamMembers = ['Member 1', 'Member 2', 'Member 3'];
    const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

    const todayMissions1 = [
        { title: '미션 1', isComplete: true, canSendMsg: false, description: '오늘 과일을 썰어 먹었어요!', image: missionImage },
        { title: '미션 2', isComplete: true, canSendMsg: false, description: '오늘 과일을 썰어 먹었어요!', image: missionImage },
        { title: '미션 3', isComplete: false, canSendMsg: true, description: '아직 미션을 완료하지 않았습니다!', image: null }
    ];

    const todayMissions2 = [
        { title: '미션 11', isComplete: true, canSendMsg: false, description: '오늘 과일을 썰어 먹었어요!', image: missionImage },
        { title: '미션 2', isComplete: true, canSendMsg: false, description: '오늘 과일을 썰어 먹었어요!', image: missionImage },
        { title: '미션 3', isComplete: false, canSendMsg: true, description: '아직 미션을 완료하지 않았습니다!', image: null }
    ];
    let todayMissions ;

    if(id == 1) todayMissions = todayMissions1;
    else todayMissions = todayMissions2;

    return (
        <div className="menu-user-container">
            <div className="menu-user-team-member-list">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`menu-user-team-member ${selectedMember === member ? 'selected-member' : ''}`}
                        onClick={() => setSelectedMember(member)}
                    >
                        {member}
                    </div>
                ))}
            </div>
            <div className="menu-user-header">
                <div className="menu-user-header-userName">
                    <span>{selectedMember} 님의 미션현황</span>
                </div>
                <div className="menu-user-header-achieveLevel">
                    <span>성취율: 66%</span>
                </div>
            </div>
            <div className="menu-user-body">
                <div className="today-mission">
                    <div className="today-mission-label">
                        <span>오늘 수행할 미션</span>
                    </div>
                    <div className="today-mission-list">
                        {todayMissions.map((mission, index) => (
                            <div key={index} className="today-mission-card">
                                <div className="today-mission-header">
                                    <div className="today-mission-title">
                                        <span>{mission.title}</span>
                                    </div>
                                    <div className="today-mission-isComplete">
                                        <img src={mission.isComplete ? checkImage : failImage} alt="status" />
                                    </div>
                                    <div className="today-mission-sendMsg">
                                        <img src={mission.canSendMsg ? canSendMsgImage : cantSendMsgImage} alt="message" />
                                    </div>
                                </div>
                                <div className="today-mission-body">
                                    {mission.image && (
                                        <div className="today-mission-img">
                                            <img src={mission.image} alt="mission" />
                                        </div>
                                    )}
                                    <div className="today-mission-desc">
                                        <span>{mission.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuUser;
