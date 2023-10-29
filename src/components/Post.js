import React, {useState} from 'react';

const Post = ({onSaveData})=> {
    const [form, setForm] = useState({
        user_name : '',
        nickname: '',
        user_id : '', 
        email: '',
        password : '',
        team_id: '' ,
        is_manager: '',
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "is_manager" && value === 'true') {
            setForm({
                ...form,
                [name] : true,
                'team_id' : '0'
            })

        }
        else if (name === "is_manager" && value === 'false'){
            setForm({
                ...form,
                [name]: false
            });
        }
        else {
            setForm({
                ...form,
                [name]:value
            })

            }
        
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSaveData(form);
        console.log(form);
        setForm({
            user_name : '',
            nickname: '',
            user_id : '', 
            email: '',
            password : '',
            team_id: '' ,
            is_manager: '',
        })


    }

    return (
        <>

            <form className = "mt-3" onSubmit={handleSubmit}>
            <div style={{ border: '1.5px solid green', padding: '20px', marginTop: '20px' }}>
                <div className="flex flex-col md:flex-row mb-1">
                    <label htmlFor = "user_name" className = "w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">이름
                        <input className = "w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required placeholder = '이름을 입력해주세요' type="text" name='user_name' value={form.user_name} onChange={handleChange}/>

                    </label>
                    <label htmlFor = "nickname" className = "w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">닉네임
                        <input className = "w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required placeholder = '닉네임을 입력해주세요' type="text" name='nickname' value={form.nickname} onChange={handleChange}/>

                    </label>
                    <label htmlFor = "user_id" className = "w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">ID
                        <input className = "w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required placeholder = 'ID를 입력해주세요' type="text" name='user_id' value={form.user_id} onChange={handleChange}/>
                        
                    </label>
                    <label htmlFor = "is_manager" className = "w-full flex-1 mx-1 text-xs font-semibold text-gray-600 uppercase">관리자
                        <div className="flex mt-2.5">
                            <input
                            type="radio"
                            name="is_manager"
                            value= 'true'
                            onChange={handleChange}
                            />
                            <span className="ml-1">Yes</span>
                        </div>
                        <div className="flex mt-1">
                            <input
                            type="radio"
                            name="is_manager"
                            value= 'false'
                            onChange={handleChange}
                            />
                            <span className="ml-1">No</span>
                        </div>
                    </label>
                    </div>
                    <div className="flex flex-col md:flex-row">
                    <label htmlFor = "email" className = "w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">이메일
                        <input className = "w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required placeholder = '이메일을 입력해주세요' type="email" name='email' value={form.email} onChange={handleChange}/>
                        
                    </label>
                    <label htmlFor = "password" className = "w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">비밀번호
                        <input className = "w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required placeholder = '비밀번호를 입력해주세요' type="password" name='password' value={form.password} onChange={handleChange}/>
                        
                    </label>

                    <label htmlFor = "team_id" className = "w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">팀
                        <input className = "w-full py-3 px-1  mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required placeholder = '팀을 입력해주세요' type="text" name='team_id' value={form.team_id} onChange={handleChange}/>
                        
                    </label>
                        
                

                </div>
                </div>
                <div className = 'text-center'>
                    <button className='bg-green-600 py-1 text-center px-6 md:px-10 md:py-2 text-white rounded text-xl md: text-base mt-4' type='submit'>추가</button>
                </div>
            </form>
            
        </>
    );
};

export default Post;