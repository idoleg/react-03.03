import React, {useState, useEffect} from 'react';
import Close from 'material-ui/svg-icons/navigation/close';
import './styles.css';

export const InstallPopup = () => {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone/.test( userAgent );
        };
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
        if (isIos() && !isInStandaloneMode()) {
            setIsShown(true);
        }
    }, []);

    return (
        <div style={ { display: isShown? 'block': 'none'}} className="speech-bubble-container">
            <div className="speech-bubble">
                <Close className="close-install-message-icon" onClick={()=> setIsShown(false)} />
                <div style={ { paddingRight: '15px' }}>Установи приложение на свой iPhone: нажми «Поделиться», а затем на экран «Домой»</div>
            </div>
        </div>
    )

}