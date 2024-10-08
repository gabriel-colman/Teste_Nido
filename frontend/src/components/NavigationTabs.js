import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigationTabs = ({ activeTab, setActiveTab }) => {
const history = useHistory();

const handleTabClick = (tab) => {
 setActiveTab(tab);
 history.push('/');
};

return (
 <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
   <button onClick={() => handleTabClick('wordlist')} style={{ marginRight: '10px' }}>
     Word list
   </button>
   <button onClick={() => handleTabClick('history')} style={{ marginRight: '10px' }}>
     History
   </button>
   <button onClick={() => handleTabClick('favorites')}>
     Favorites
   </button>
 </div>
);
};

export default NavigationTabs;
