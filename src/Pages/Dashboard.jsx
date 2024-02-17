import React,{useState,useEffect} from 'react';
import BadgeImageCard from '../Components/BadgeImageCard';
import './Page Style/Dashboard.css'

function Dashboard(props) {
    let [open, setOpen] = useState(false);
    let [User,SetUser] = useState({});
    let [Points,SetPoints] = useState({});
    let [Badges,SetBadges] = useState([]);
    
    useEffect(()=>{
        let getdata = async() => {
            try {
                let reults_user = await fetch(`https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08`,{
                    headers:{
                        'accept' : 'application/json',
                        'apikey': 'k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be',
                        'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc',
                        'userid' : 'u-a2399489-9cd0-4c94-ad12-568379202b08'
                    }
                });
                let response_user = await reults_user.json();
                // console.log(response_user);
                SetUser(response_user.data);
            } catch (error) {
                console.log(error);
            }
        }
        getdata();
    },[])
    
    
    return (
        <div id='dashboard_main'>
            <div className='avatar_div'>
                <h2>Profile</h2>
                <div className='profile_div'>
                    <img src={User.imageUrl} alt="avatar" />
                </div>
            </div>
            <div className='profile_info_div'>
                <div className='profile_name'>
                    <h2>{User.name}</h2>
                </div>
                <div className='badges_div'>
                    <div className='badge_card'>
                        <p className='badge_card_info'>2100</p>
                        <p className='badge_card_title'>Points</p>
                    </div>
                    <div className='badge_card'>
                        <p className='badge_card_info'>#1</p>
                        <p className='badge_card_title'>Rank</p>
                    </div>
                    <div className='badge_card'>
                        <p className='badge_card_info'>3</p>
                        <p className='badge_card_title'>Level</p>
                    </div>
                    
                </div>
                <div className='option_div'>
                    <button className='ord_button'>Membership</button>
                    <button className='badge_button'>Badges</button>
                    <button className='ord_button'>Point History</button>
                </div>
                <div className='badge_option_div'>
                    <BadgeImageCard Image={'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww'} open={open} setOpen={setOpen}/>
                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;