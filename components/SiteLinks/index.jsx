import React from "react";
import {RouteHandler} from "react-router";
import {prefixLink} from "gatsby-helpers";
import {config} from "config";
import "./style.css";

class SiteLinks extends React.Component {
    render() {

        return (
            <div className="sitelinks">
                <ul>
                    <li><a href={ config.siteItunesUrl } target="_blank">iTunes</a></li>
                    <li><a href={ config.siteRssUrl } target="_blank">RSS</a></li>
                    <li><a href={ config.siteSoundcloudUrl } target="_blank">SoundCloud</a></li>
                    <li><a href={ config.siteTwitterUrl } target="_blank">Twitter</a></li>
                    <li><a href={ config.siteEmailUrl }>Email</a></li>
                </ul>

                <p><small>Author: <a href="https://twitter.com/petrmyazin" target="_blank">@PetrMyazin</a></small></p>
            </div>
        );
    }
}

export default SiteLinks