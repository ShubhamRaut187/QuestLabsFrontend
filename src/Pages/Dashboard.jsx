import React,{useState,useEffect} from 'react';
import BadgeImageCard from '../Components/BadgeImageCard';
import './Page Style/Dashboard.css'

function Dashboard(props) {
    let [open, setOpen] = useState(false);
    let [User,SetUser] = useState({});
    let [Points,SetPoints] = useState({});
    let [Badges,SetBadges] = useState([]);
    let [Rank,SetRank] = useState({});
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

                let results_points = await fetch(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp`,{
                    headers:{
                        'accept' : 'application/json',
                        'apikey': 'k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be',
                        'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc',
                        'userid' : 'u-a2399489-9cd0-4c94-ad12-568379202b08'
                    }
                });
                let response_points = await results_points.json();
                // console.log(response_points); 
                SetPoints(response_points);

                let results_rank = await fetch(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank`,{
                    headers:{
                        'accept' : 'application/json',
                        'apikey': 'k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be',
                        'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc',
                        'userid' : 'u-a2399489-9cd0-4c94-ad12-568379202b08'
                    }
                });
                let response_rank = await results_rank.json();
                // console.log(response_rank);
                SetRank(response_rank.data);

                let results_badges = await fetch(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges?limit=9`,{
                    headers:{
                        'accept' : 'application/json',
                        'apikey': 'k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be',
                        'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc',
                        'userid' : 'u-a2399489-9cd0-4c94-ad12-568379202b08'
                    }
                });
                let response_badges = await results_badges.json();
                // console.log(response_badges);
                SetBadges(response_badges.data);
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
                        <p className='badge_card_info'>{Points.data}</p>
                        <p className='badge_card_title'>Points</p>
                    </div>
                    <div className='badge_card'>
                        <p className='badge_card_info'>#{Rank.position}</p>
                        <p className='badge_card_title'>Rank</p>
                    </div>
                    <div className='badge_card'>
                        <p className='badge_card_info'>{Points.tier}</p>
                        <p className='badge_card_title'>Level</p>
                    </div>
                    
                </div>
                <div className='option_div'>
                    <button className='ord_button'>Membership</button>
                    <button className='badge_button'>Badges</button>
                    <button className='ord_button'>Point History</button>
                </div>
                <div className='badge_option_div'>
                    {
                        Badges ? Badges.map((elem,index)=>{
                            return <BadgeImageCard key={index} Image={elem.imageUrl} open={open} setOpen={setOpen}/>
                        }) : <></>
                    }
                    
                </div>
                
            </div>
            <div className='footer'>
            <i className="fa-solid fa-star fa-lg" style={{'color': '#313131'}}></i>
            <i className="fa-solid fa-magnifying-glass fa-lg" style={{'color': '#313131'}}></i>
            <i className="fa-solid fa-bag-shopping fa-lg" style={{'color': '#313131'}}></i>
            <i className="fa-solid fa-user fa-lg" style={{'color': '#313131'}}></i>
            </div>
        </div>
    );
}

export default Dashboard;