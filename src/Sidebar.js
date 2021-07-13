import React from 'react'
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon />

            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={ExploreOutlinedIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
            <SidebarOption Icon={MailOutlineIcon} text="Message"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="List"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizOutlinedIcon} text="More"/>
        <Button variant="outlined" className="sidebar__btn" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
