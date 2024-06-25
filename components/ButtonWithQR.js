import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Button, Box, Popover, IconButton } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { faDiscord, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper, faBolt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/ButtonWithQR.module.css';

const ButtonWithQR = ({ label, link }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    let icon;
    switch (label.toLowerCase()) {
        case 'website':
            icon = faGlobe;
            break;
        case 'discord':
            icon = faDiscord;
            break;
        case 'twitter':
            icon = faTwitter;
            break;
        case 'linkedin':
            icon = faLinkedin;
            break;
        case 'instagrants':
            icon = faBolt;
            break;
        case 'superteam balkan substack':
            icon = faNewspaper;
            break;
        default:
            icon = null;
    }

    return (
        <Box className={styles.container} display="flex" alignItems="center" mb={1}>
            <Button
                sx={{
                    borderRadius: '10px',
                    border: '2px solid black'
                }}
                variant="contained"
                color="primary"
                href={link}
                target="_blank"
                style={{ marginRight: 8 }}
                className={styles.button}
            >
                {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: 8 }} />}
                {label}
            </Button>
            <IconButton color="primary" onClick={handleClick}>
                <QrCodeIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClick}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box p={2}>
                    <QRCode value={link} size={128} />
                </Box>
            </Popover>
        </Box>
    );
};

export default ButtonWithQR;
